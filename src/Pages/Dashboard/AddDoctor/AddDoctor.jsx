import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import Loading from "../../Shared/Loading/Loading";

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    data: specialties,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["appointmentSpecialty"],
    queryFn: async () => {
      const res = await fetch("http://localhost:7000/appointmentSpecialty");
      const data = await res.json();
      return data;
    },
  });

  const handleSignUp = (data) => {
    console.log(data);
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h1 className="text-3xl font-semibold">Add a New Doctor</h1>
      <div className="">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mt-4">
          <form onSubmit={handleSubmit(handleSignUp)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: "Name is Required" })}
                placeholder="Enter Your Name"
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
                placeholder="Enter Your email"
                className="input input-bordered"
                required
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Specialty</span>
              </label>
              <select
                {...register("specialty")}
                className="select select-bordered w-full"
              >
                {specialties.map((specialty, i) => (
                  <option key={i} value={specialty.name}>
                    {specialty.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="file"
                {...register("image", {
                  required: "Photo is Required",
                })}
                placeholder="Enter Your picture"
                className="input input-bordered"
                required
              />
              {errors.img && (
                <p className="text-red-500">{errors.img.message}</p>
              )}
            </div>

            <div className="form-control mt-2">
              <input type="submit" className="btn btn-accent " value="Add" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;
