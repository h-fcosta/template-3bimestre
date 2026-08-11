// Estas bibliotecas serão usadas quando os TODOs forem completados em aula.
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../prismaClient.js";

export async function register(req, res) {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Nome, email e senha são obrigatórios",
      });
    }

    // TODO: verificar se já existe usuário com este email
    // Dica: use prisma.user.findUnique e o campo email.

    // TODO: gerar o hash da senha usando bcrypt.hash
    // Dica: não salve a variável password diretamente no banco.

    // TODO: salvar o usuário no banco com a senha hasheada
    // Dica: use prisma.user.create.

    // TODO: retornar os dados do usuário sem a senha

    return res.status(501).json({
      message: "Cadastro ainda será implementado pelos alunos",
    });
  } catch (error) {
    console.error("Erro no cadastro:", error);
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email e senha são obrigatórios",
      });
    }

    // TODO: buscar usuário pelo email
    // Dica: use prisma.user.findUnique.

    // TODO: comparar a senha digitada com o hash salvo no banco
    // Dica: use bcrypt.compare.

    // Neste projeto, o token funciona como uma sessão.
    // Depois do login, o usuário envia esse token para provar que está autenticado.

    // TODO: gerar token JWT com o id do usuário
    // Dica: use jwt.sign, JWT_SECRET e JWT_EXPIRES_IN.

    // TODO: retornar token e dados do usuário

    return res.status(501).json({
      message: "Login ainda será implementado pelos alunos",
    });
  } catch (error) {
    console.error("Erro no login:", error);
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
}
