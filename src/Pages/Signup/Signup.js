import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Signup = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signupData, setsignupData] = useState("");
  console.log(signupData);
  return (
    <div>
      <div className="hero-content flex-col">
        <form
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
          onSubmit={handleSubmit((signupData) =>
            setsignupData(JSON.stringify(signupData))
          )}
        >
          <div className="card-body">
            <h3 className="text-center text-2xl">Login</h3>
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
              <input className="btn" value="Login" type="submit" />
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
