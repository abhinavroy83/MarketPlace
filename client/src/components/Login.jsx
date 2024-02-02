import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "../components/index";
import axios from "axios";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onsubmit = async (data) => {
    console.log(data);
    try {
      const res = await axios.post("http://localhost:5000/user/login", data);
      if (res) {
        console.log(res.data);
        alert("Successfully logged");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-red-400">Login</h1>
      <form onSubmit={handleSubmit(onsubmit)} className="flex flex-col">
        <Input
          label="Email"
          type="text"
          {...register("email", { required: "Email is required" })}
        />
        <Input
          label="Password"
          type="password"
          {...register("password", { required: true })}
        />
        <button
          type="submit"
          className="text-black rounded-md border-2 my-2 w-1/3 bg-white mx-auto"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
