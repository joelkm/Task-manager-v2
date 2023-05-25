import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function Signup() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  const onSubmit = async (data: any) => {
    await axios.post(
      "/api/user/login",
      { email: data.email, password: data.password },
      config
    );
  }

  return (
    <div className="login">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Choose an email and a password</h2>
        <input type="email" placeholder="Email" {...register("email", {required: true})}/>
        {errors.email && <span>Please, introduce your email</span>}
        <input type="password" placeholder="Pasword" {...register("password", {required: true})}/>
        {errors.password && <span>Please, introduce your password</span>}
        <h4>have you forgot your password? click <a href="/password-reset">here</a></h4>
        <input value="Sign up" type="submit"/>
        <a href="/login">Back to login</a>
      </form>
    </div>
  )
}
export default Signup
