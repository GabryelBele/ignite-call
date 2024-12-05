import { salvarPerfilModel } from '../models/Perfil.js';

export const salvarPerfil = async (req, res) => {
    try {
        const { step1Data } = req.body;
        await salvarPerfilModel(step1Data);

        res.status(200).json({ message: 'Dados salvos com sucesso' });
    } catch (error) {
        console.error('Erro ao salvar perfil:', error); // Log detalhado no console
        res.status(500).json({
            error: 'Erro ao salvar os dados',
            details: error.message, // Detalhe do erro para debugging
        });
    }
};
