import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

type FormValues = {
  email: string,
  password: string,
  apiError: string
}

function Signup() {

  const { register, handleSubmit, setError, formState: { errors } } = useForm<FormValues>();
  const navigate = useNavigate();
  const onSubmit = async (data: any) => {
    axios.post("/user/register",
      { email: data.email, password: data.password }, {
      headers: {
        "Content-type": "application/json",
      },
    }
    )
    .then((response) => {
      navigate('/login');
    })
    .catch( (error) => {      
      setError('apiError', { type: 'server side', message: error.response.data.data.error }); // Someone has to fix this
    })
  }

  return (
    <div className="login">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Choose an email and a password</h2>
        <input type="email" placeholder="Email" {...register("email", {required: true})}/>
        {errors.email && <span className="error-message">Please, introduce your email</span>}
        <input type="password" placeholder="Pasword" {...register("password", {required: true})}/>
        {errors.password && <span className="error-message">Please, introduce your password</span>}
        <h4>have you forgot your password? click <a href="/password-reset">here</a></h4>
        <input value="Sign up" type="submit"/>
        {errors.apiError && <span className="error-message">{errors.apiError.message}</span>}
        <a href="/login">Back to login</a>
      </form>
    </div>
  )
}
export default Signup
