import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:3000/`,
});

export default class ContractsService {

  async getAll() {
    const response = await api.get('data.json');

    return response.data;
  }

}
