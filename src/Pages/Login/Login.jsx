import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  // login error
  const [loginError, setLoginError] = useState("");
  const { singIn } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    setLoginError("");
    singIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  };

  return (
    <div>
      <div className="flex justify-center mt-8 md:mt-32 lg:mt-44">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(handleLogin)} className="card-body">
            <h3 className="text-center text-2xl font-semibold">Login {name}</h3>

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
              <input type="submit" className="btn btn-accent " value="Login" />
            </div>
            {loginError && <p className="text-red-500">{loginError}</p>}
            <label className="text-center">
              <Link to="/sign-up" className="label-text-alt link link-hover  ">
                New to Doctor Portal?
                <span className="text-primary"> Please Sign UP</span>
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

export default Login;
