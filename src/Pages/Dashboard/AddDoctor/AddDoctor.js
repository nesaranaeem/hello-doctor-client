import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const imgbbApi = process.env.REACT_APP_imgbbApi;
  const handleAddDoctor = (data) => {
    console.log(data);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgbbApi}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        console.log(imageData);
        if (imageData.success) {
          console.log(imageData.data.url);
          const doctor = {
            doctorName: data.name,
            doctorEmail: data.email,
            doctorSpeciality: data.speciality,
            doctorImage: imageData.data.url,
          };
          fetch("http://localhost:5000/doctors", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${data.name} is added successfully`);
              navigate("/dashboard/manage-doctors");
            });
        }
      });
  };

  // here data:specialities = data er new name speciality
  const { data: specialities, isLoading } = useQuery({
    queryKey: ["speciality"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/doctor-speciality");
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <h3>Loading</h3>;
  }
  return (
    <div>
      <div className="hero-content flex-col">
        <form
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
          onSubmit={handleSubmit(handleAddDoctor)}
        >
          <div className="card-body">
            <h3 className="text-center text-2xl">Add Doctor</h3>
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
                <span className="label-text">Speciality</span>
              </label>
              <select
                {...register("speciality", {
                  required: "Speciality is required",
                })}
                className="select select-bordered w-full max-w-xs"
              >
                {specialities.map((speciality) => (
                  <option key={speciality._id} value={speciality.name}>
                    {speciality.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-control mt-2">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                {...register("image", {
                  required: "image is required",
                })}
                type="file"
                className="file-input w-full max-w-xs"
              />
              {errors.image && (
                <p className="label-text-alt mt-1 text-red-700">
                  {errors.image?.message}
                </p>
              )}
            </div>
            <div className="form-control mt-2">
              <input className="btn" value="Add Doctor" type="submit" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
