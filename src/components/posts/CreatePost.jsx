import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Axios from "../../apis/Axios";
const CreatePost = () => {
  let [title, setTitle] = useState("");
  let [details, setDetails] = useState("");
  let [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  let handleSubmit = async e => {
    e.preventDefault();
    try {
      //http request payload
      let payload = { title, details };
      await Axios.post("/posts", payload);

      navigate("/");
    } catch (error) {}
  };
  return (
    <section id="authBlock" className="card ">
      <article className="card-body col-4 mx-auto bg-light my-4">
        <h2 className="text-center font-weight-bold text-dark text-uppercase my-2">
          Create post
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="">Title</label>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="details">Details</label>
            <textarea
              id="details"
              cols="30"
              rows="10"
              className="form-control"
              value={details}
              onChange={e => setDetails(e.target.value)}
              required
            ></textarea>
          </div>

          <div className="form-group">
            <button className="btn btn-success btn-block my-2">
              {loading === true ? "loading" : "Create Post"}
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default CreatePost;
