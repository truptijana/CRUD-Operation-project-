import axios from "axios";
//!axios instance
export default axios.create({
  baseURL:  "http://localhost:5000/",
  headers: {
    "content-type": "application/json",
  },
});