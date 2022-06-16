import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { updatetodo } from "../Redux/actions";
const EditTodo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const todo = useSelector((state) => state.todo.data);

  const currenttodo = todo.find((item) => item.id === id);
  // console.log(todo);
  useEffect(() => {
    if (currenttodo) {
      setName(currenttodo.name);
      setEmail(currenttodo.email);
    }
  }, [currenttodo]);
  const data = {
    id: currenttodo.id,
    name,
    email,
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(updatetodo(data, data.id));
    // console.log(dispatch(updatetodo(data)));
    navigate("/ShowTodo");
  };
  return (
    <div>
      <h4 className="my-3"> Edit Todo</h4>
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
                  Update Todo
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTodo;
