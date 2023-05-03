function Login() {

  return (
    <div className="login">
      <form action="/user/login" method="POST">
      <h2>Insert your credentials</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Pasword" />
        <h4>have you forgot your password? click <a href="/password-reset">here</a></h4>
        <input value="Log In" type="submit" className="button action-primary submit" />
        <p className="error-message" id="login-error">Incorrect email or password</p>
      <a href="/register">Register</a>
      </form>
    </div>
  )
}

export default Login
