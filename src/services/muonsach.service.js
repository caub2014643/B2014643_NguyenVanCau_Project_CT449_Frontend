import createApiClient from "./api.service";
class MuonsachService {
  constructor(baseUrl = "/api/muonsach") {
    this.api = createApiClient(baseUrl);
  }
  async getAll() {
    return (await this.api.get("/")).data;
  }
  async getAllReader(madocgia) {
    return (await this.api.post("lichsu", { madocgia }));
  }
  async create(data) {
    return (await this.api.post("/", data)).data;
  }
  async deleteAll() {
    return (await this.api.delete("/")).data;
  }
  async get(id) {
    return (await this.api.get(`/${id}`)).data;
  }
  async update(id, data) {
    return (await this.api.put(`/${id}`, data)).data;
  }
}
export default new MuonsachService();
