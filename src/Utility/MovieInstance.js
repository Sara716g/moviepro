import axios from "axios";

const movieInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
//   params: {
//     api_key: "f1c8e9b1c9e5a0c8d2e7f1a9b2c3d",
//   },
});

export default movieInstance;