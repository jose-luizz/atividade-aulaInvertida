import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [form, setForm] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    telefone: "",
    cpf: ""
  });

  const [usuario, setUsuario] = useState([]);
  const [editando, setEditando] = useState(null);

  const API = "http://localhost:3001"

  const fetchUsuario = async () => {
    const res = await fetch(API);
    const data = await res.json;
    setUsuario(data);
  };

  useEffect(() => {
    fetchUsuario();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
  if (editando) {
    await fetch(`${API}/${editando}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });
    setEditando(null);
  } else {
    await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });  
  }
};

  const deletar = async (id) => {
    await fetch(`${API}/${id}`, {
      method: "DELETE"
    });
    fetchUsuario();
  };

  const editar = (usuario) => {
    setForm({
      nome: usuario.nome,
      sobrenome: usuario.sobrenome,
      email: usuario.email,
      telefone: usuario.telefone,
      cpf: usuario.cpf
    });
    setEditando(usuario.id);
  };

  return (
    <div className="App">
      <h1>CRUD Cadastro de Usuário</h1>
      <label>Nome</label>
      <input type="text" id="nome"/><br/>

      <label>Sobrenome</label>
      <input type="text" id="sobrenome"/><br/>
 
      <label>E-mail</label>
      <input type="text" id="email"/><br/>

      <label>Telefone</label>
      <input type="number" id="telefone"/><br/>


      <label>CPF</label>
      <input type="number" id="cpf"/><br/>

      <button type="button" onclick="cadasrtrarUsuario()">Cadastre-se</button>
      <p id="msgcadastro"></p>


      <button type="button" onclick="editarUsuario()">Editar</button>
      <p id="msgeditar"></p>

      <button type="button" onclick="excluirUsuario()">Excluir</button>
      <p id="msgexcluir"></p>
    </div>
  );
}

export default App;