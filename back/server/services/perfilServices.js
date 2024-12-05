import { salvarPerfilModel } from "../models/Perfil.js";

const salvarPerfilService = (nome, foto, descricao, callback) => {
  salvarPerfilModel(nome, foto, descricao, callback);
};

export { salvarPerfilService };
