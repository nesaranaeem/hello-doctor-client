import { data } from "autoprefixer";
import React, { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useToken from "../../hooks/useToken";

const Signup = () => {
  const { signUp, updateUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [signupData, setsignupData] = useState("");
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();
  if (token) {
    navigate("/");
  }
  const handleSignup = (signupData) => {
    console.log(signupData);
    signUp(signupData.email, signupData.password)
      .then((res) => {
        const user = res.user;
        const userInfo = {
          displayName: signupData.name,
        };
        updateUser(userInfo)
          .then(() => {
            saveUser(signupData.name, signupData.email);
            toast("User Created Successfully.");
          })
          .catch((err) => {
            console.error(err);
          });
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const saveUser = (name, email) => {
    const user = { name, email };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setCreatedUserEmail(email);
      });
  };

  return (
    <div>
      <div className="hero-content flex-col">
        <form
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
          onSubmit={handleSubmit(handleSignup)}
        >
          <div className="card-body">
            <h3 className="text-center text-2xl">Sign Up</h3>
            <div className="form-control mt-2">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", {
                  required: "Name is required",
                })}
                type="text"
                placeholder="name"
                className="input input-bordered"
              />
              {errors.name && (
                <p className="label-text-alt mt-1 text-red-700">
                  {errors.name?.message}
                </p>
              )}
            </div>
            <div className="form-control mt-2">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", {
                  required: "Email Address is required",
                })}
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && (
                <p className="label-text-alt mt-1 text-red-700">
                  {errors.email?.message}
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password need to be minimum 6 character",
                  },
                })}
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password && (
                <p className="label-text-alt mt-1 text-red-700">
                  {errors.password?.message}
                </p>
              )}
              <label className="label">
                <Link to="/forgot" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>

            <div className="form-control mt-2">
              <input className="btn" value="Signup" type="submit" />
            </div>
            <p>
              Already have an account?
              <Link to="/login" className="text-secondary pl-1">
                Login
              </Link>
            </p>
            <div className="divider">OR</div>
            <button className="btn btn-outline">CONTINUE WITH GOOGLE</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
