import axios from "axios";
import AddHoverboard from './../pages/AddHoverboard';

// THIS IS AN EXAMPLE THAT YOU CAN USE
// TO CREATE A SERVICE FOR YOUR AXIOS CALLS
class HoverboardService {
  constructor() {
    // this.api  is a reusable base of the request containing the base url (baseURL)
    // of the API and the options ( `withCredentials: true` )
    this.api = axios.create({
      baseURL: "http://localhost:5000/api",
      withCredentials: true,
    });
  }

  getAll = (model, name, state, location) => {
    const pr = this.api.get("/hoverboards") .then((response)=>response.data);

    return pr;
  };

  getOne = (id) => {
    const pr = this.api.get(`/hoverboards/${id}`);

    return pr;
  };

  createHoverboard= (id) => {
    const pr = this.api.post(`/hoverboards/${id}`);

    return pr;
  };

  deleteOne = (id) => {
    const pr = this.api.delete(`/hoverboards/${id}`);

    return pr;
  };
}

// Create instance (object) containing all axios calls as methods
const hoverboardService = new HoverboardService();

export default hoverboardService;

// Service is a set of methods abstracted and placed into a class, out of which we create one instance.
// In the above case, all axios request calls are abstracted into methods.
