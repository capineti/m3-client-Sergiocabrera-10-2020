import axios from "axios";
//import AddHoverboard from '../components/AddHoverboard';

class HoverboardService {
  constructor() {
    this.hoverboards = axios.create({
      baseURL: "http://localhost:5000/api",
      withCredentials: true,
    });
  }

  getAllHoverboards = () => {
    const pr = this.hoverboards
      .get("/hoverboards")
      .then((response) => response.data);

    return pr;
  };

  getOne = (id) => {
    const pr = this.api.get(`/hoverboards/${id}`);

    return pr;
  };

  createHoverboard = (data) => {
    const pr = this.hoverboards.post("/hoverboards", data);
    console.log("WORKS");
    return pr;
  };

  deleteOne = (id) => {
    const pr = this.api.delete(`/hoverboards/${id}`);

    return pr;
  };
}

// Create instance (object) containing all axios calls as methods
const hoverboardservice = new HoverboardService();

export default hoverboardservice;

// Service is a set of methods abstracted and placed into a class, out of which we create one instance.
// In the above case, all axios request calls are abstracted into methods.
