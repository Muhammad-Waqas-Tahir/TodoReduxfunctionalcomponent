import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deletetodo } from "../Redux/actions";
const ShowTodo = () => {
  const todo = useSelector((state) => state.todo.data);
  //   console.log(todo);
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  //   const [{ name, email }] = todo;
  //   console.log(name);

  // useEffect(() => {
  //   let x = todo;
  //   debugger;
  // }, [todo]);
  const onLogoutHandler = () => {
    navigate("/login");
    localStorage.removeItem("token");
  };

  return (
    <div className="container">
      <h4 className="mt-2">Welcome to Redux Todo List</h4>
      <div className="row d-flex flex-column">
        <div className="col-md-12   text-end">
          <Link to="/add" className="btn btn-dark my-3 ">
            {" "}
            Add Todo
          </Link>
          <button
            onClick={onLogoutHandler}
            to="/add"
            className="btn btn-danger mx-3 "
          >
            {" "}
            Logout
          </button>
        </div>
        <div className="col-md-10 mx-auto my-5">
          <table className="table ">
            <thead className="table-header bg-dark text-white">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {todo.map((list) => {
                return (
                  <tr key={list.id}>
                    <td>{list.name}</td>
                    <td>{list.email}</td>
                    <td>
                      <Link
                        to={`/edit/${list.id}`}
                        className="btn btn-sm btn-primary pr-2"
                      >
                        {" "}
                        Edit
                      </Link>
                      <button
                        type="button"
                        onClick={() => dispatch(deletetodo(list.id))}
                        className="btn btn-sm btn-danger "
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShowTodo;
