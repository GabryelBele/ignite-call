// src/utils/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sua-api-url.com',
});

export const createAppointment = async (data: unknown) => {
  try {
    const response = await api.post('/appointments', data);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar agendamento:', error);
  }
};

export default api;
