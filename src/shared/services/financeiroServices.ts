import axios from "axios";
import { financeiroSchemaType } from "./types";

const BASE_URL = "http://localhost:3000/financeiro";

export const getFinances = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const postFinances = async (data: financeiroSchemaType) => {
  const { id, ...mydata } = data;
  const response = await axios.post(BASE_URL, mydata);
  return response;
};

export const putFinances = async (data: financeiroSchemaType) => {
  const response = await axios.put(`${BASE_URL}?id=${data.id}`, data);
  return response;
};

export const deleteFinances = async (id: number) => {
  const response = await axios.delete(`${BASE_URL}?id=${id}`);
  return response;
};

