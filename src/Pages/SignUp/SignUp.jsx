import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import toast from "react-hot-toast";

const SignUp = () => {
  // singup error
  const [singUpError, setSingUpError] = useState("");
  // get context
  const { createUser, updateUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUp = (data) => {
    setSingUpError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        const updatingUser = {
          displayName: data.name,
        };
        updateUser(updatingUser)
          .then(() => {
            savedUserDB(data.name, data.email);
          })
          .catch((error) => {
            setSingUpError(error.message);
          });
      })
      .catch((error) => {
        setSingUpError(error.message);
      });
  };

  const savedUserDB = (name, email) => {
    const user = { name, email };
    fetch("http://localhost:7000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Account created Successfully done!");
          <Navigate to="/"></Navigate>;
        } else {
          toast.error("Faild to create account");
        }
      });
  };

  return (
    <div>
      <div className="flex justify-center mt-8 md:mt-32 lg:mt-44">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(handleSignUp)} className="card-body">
            <h3 className="text-center text-2xl font-semibold">Sign Up </h3>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: "Name is Required" })}
                placeholder="Name"
                className="input input-bordered"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: "Email is Required" })}
                placeholder="email"
                className="input input-bordered"
                required
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Password Is required",
                  minLength: {
                    value: 6,
                    message: "Password must be six characters long",
                  },
                  pattern: {
                    value: /(?=.*?[A-Z])(?=.*?[!@%$&#*])(?=.*?[0-9])/,
                    message:
                      "Password must have Uppercase, Number Specaila characters and number",
                  },
                })}
                placeholder="password"
                className="input input-bordered"
                required
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>
            <div className="form-control mt-2">
              <input
                type="submit"
                className="btn btn-accent "
                value="Sign Up"
              />
            </div>

            {singUpError && <p className="text-red-500">{singUpError}</p>}

            <label className="text-center">
              <Link to="/login" className="label-text-alt link link-hover  ">
                Already have an account?
                <span className="text-primary"> Please login</span>
              </Link>
            </label>
            <div className="divider">OR</div>
            <div className="form-control mt-1">
              <button className="btn btn-outline ">CONTINUE WITH GOOGLE</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
