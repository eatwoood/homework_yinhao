import axios from "../utils";

export default {
  getQQInfo: async (qq: number | string): Promise<any> =>
   await axios.get("/api/qq.info", { params: { qq } }),
};
