import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addtodo } from "../Redux/actions";
import { useNavigate } from "react-router-dom";
const AddTodo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmitHandler = (e) => {
    e.preventDefault();

    dispatch(
      addtodo({ name: name, email: email, id: Math.random().toString() })
    );

    navigate("/ShowTodo");
    setName("");
    setEmail("");
  };
  return (
    <div>
      <h4 className="my-3"> AddTodo</h4>
      <div className="container-fluid">
        {" "}
        <div className="row">
          <div className="col-md-6 p-5 mx-auto shadow">
            <form onSubmit={onSubmitHandler}>
              <div className="form-group">
                <input
                  className="form-control mb-3"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Name"
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email"
                />
              </div>
              <div className="form-group ">
                <button type="submit" className="btn btn-block btn-dark mt-3">
                  Add Todo
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
