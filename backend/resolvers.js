const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { client } = require('./database');

const resolvers = {
  Query: {
    async user({ id }) {
      const result = await client.query('SELECT * FROM users WHERE id = $1', [id]);
      return result.rows[0];
    },
    async users() {
      const result = await client.query('SELECT * FROM users');
      return result.rows;
    },
  },
  Mutation: {
    async signUp({ username, password }) {
      try {
        // Verifique se o usuário já existe
        const existingUser = await client.query('SELECT * FROM users WHERE username = $1', [username]);
        if (existingUser.rows.length > 0) {
          throw new Error('Usuário já existe');
        }

        // Hash da senha antes de salvar no banco de dados
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insira o novo usuário no banco de dados
        const result = await client.query('INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *', [username, hashedPassword]);
        const newUser = result.rows[0];

        // Gerar token de autenticação usando JWT
        const token = jwt.sign({ userId: newUser.id, username: newUser.username }, 'segredo_do_jwt', {
          expiresIn: '1h', // Define o tempo de expiração do token
        });

        // Retorna o token e o usuário autenticado
        return { token, user: newUser };
      } catch (error) {
        throw new Error(`Erro ao criar usuário: ${error.message}`);
      }
    },
    async signIn({ username, password }) {
      try {
        // Busque o usuário no banco de dados pelo nome de usuário
        const result = await client.query('SELECT * FROM users WHERE username = $1', [username]);
        const user = result.rows[0];

        // Verifique se o usuário foi encontrado e se a senha está correta
        if (!user || !(await bcrypt.compare(password, user.password))) {
          throw new Error('Usuário ou senha inválidos');
        }

        // Gerar token de autenticação usando JWT
        const token = jwt.sign({ userId: user.id, username: user.username }, 'segredo_do_jwt', {
          expiresIn: '1h', // Define o tempo de expiração do token
        });

        // Retorna o token e o usuário autenticado
        return { token, user };
      } catch (error) {
        throw new Error(`Erro ao autenticar usuário: ${error.message}`);
      }
    },
  },
};

module.exports = resolvers;