import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { data } from "./db";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPasseord] = useState("");
  const { dbemail, dbpassword, token } = data;
  // console.log(dbpassword);

  const navigate = useNavigate();
  const onsubmitHandler = (event) => {
    event.preventDefault();
    if (email === dbemail && password === dbpassword) {
      localStorage.setItem("token", token);
      toast.success("Welcome to Home Page");
      navigate("/ShowTodo");
    } else {
      toast.warning("Please Enter correct Credential");
    }
  };
  return (
    <div>
      <h4 className="my-3"> Login</h4>
      <div className="container-fluid">
        {" "}
        <div className="row">
          <div className="col-md-6 p-5 mx-auto shadow">
            <form>
              <div className="form-group">
                <input
                  className="form-control mb-3"
                  placeholder="Enter Email"
                  type="email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPasseord(e.target.value)}
                />
              </div>
              <div className="form-group ">
                <button
                  onClick={onsubmitHandler}
                  type="submit"
                  className="btn btn-block btn-dark mt-3"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
