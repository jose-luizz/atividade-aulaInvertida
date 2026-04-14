import { db } from "../db.js";

export const getUsers = (_, res) => {
    const q = "SELECT * FROM usuario";
// Seleciona a tabela do banco de dados para a inserção e busca de dados
    db.query(q, (err, data) =>{
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const addUser = (req, res) => {
    const q = "INSERT INTO usuario(nome, sobrenome, email, cpf, telefone) VALUES(?)";
 // Inserir dados dentro do Banco de Dados
    const values = [
        req.body.nome,
        req.body.sobrenome,
        req.body.email,
        req.body.cpf,
        req.body.telefone
    ];

    db.query(q, [values], (err) => {
        if (err) return res.json(err);
// Retorna o cadastro criado
        return res.status(200).json("Usuário criado com sucesso.");
    });
};

export const deleteUser = (req, res) => {
    const q = "DELETE FROM usuario WHERE id = ?";
// Deleta os dados de usuário
    db.query(q, [req.params.id], (err) => {
        if (err) return res.json(err);
// Retorna o cadastro deletado
        return res.status(200).json("Usuário deletado com sucesso.");
    });
};

export const updateUser = (req, res) => {
    const q = "UPDATE usuario SET nome = ?, sobrenome = ?, email = ?, cpf = ?, telefone = ? WHERE id = ?";
// Atualiza os dados de usuário
    const values = [
        req.body.nome,
        req.body.sobrenome,
        req.body.email,
        req.body.cpf,
        req.body.telefone
    ];

    db.query(q, [...values, req.params.id], (err) => {
        if (err) return res.json(err);
// Retorna a atualização dos dados do usuário
        return res.status(200).json("Usuário atualizado com sucesso.");
    });
};