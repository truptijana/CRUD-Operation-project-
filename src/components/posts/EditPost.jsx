import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Axios from "../../apis/Axios";
const EditPost = () => {
  let { id } = useParams();
  let [title, setTitle] = useState("");
  let [details, setDetails] = useState("");
  let [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  useEffect(() => {
    let fetchPost = async () => {
      let { data } = await Axios.get(`/posts/${id}`);
      setTitle(data.title);
      setDetails(data.details);
    };
    fetchPost();
  }, [id]);

  let handleSubmit = async e => {
    e.preventDefault();
    let payload = { title, details };
    try {
      await Axios.put(`/posts/${id}`, payload);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section id="authBlock" className="card ">
      <article className="card-body col-4 mx-auto bg-light my-4">
        <h2 className="text-center font-weight-bold text-dark text-uppercase my-2">
          Update post
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

export default EditPost;
