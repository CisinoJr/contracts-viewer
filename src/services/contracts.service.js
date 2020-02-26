import axios from "axios";

const api = axios.create({
  baseURL: `https://cisinojr.github.io/contracts-viewer`,
});

export default class ContractsService {

  async getAll() {
    const response = await api.get('data.json');

    return response.data;
  }

}
