import express from 'express';
import {getUsers, addUser, deleteUser, updateUser} from "../controllers/user.js";

const routes = express.Router();

// Criação das Rotas
routes.get('/', getUsers);
routes.post('/', addUser);
routes.delete('/:id', deleteUser);
routes.put('/:id', updateUser);

export default routes;