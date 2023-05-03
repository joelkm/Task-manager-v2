import './App.css'

function Login() {
  
  const login = document.getElementById('login-form');
  login.addEventListener('submit', async (e) => {
      e.preventDefault();
      let inputs = document.querySelectorAll('input')
      let response = await fetch('/user/login', {
          method: "POST",
          mode: "cors",
          cache: "no-cache",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({
              email: inputs[0].value,
              password: inputs[1].value
          })
      })
      let data = await response.json();
      console.log(data);
      if(data.error) {
          document.getElementById('login-error').style.display = 'block';
      }
  }

  return (
    <div className="login">
      <form action="/user/login" method="POST">
      <h2>Insert your credentials</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Pasword" />
        <h4>have you forgot your password? click <a href="/password-reset">here</a></h4>
        <input value="Log In" type="submit"/>
        <p className="error-message" id="login-error">Incorrect email or password</p>
      <a href="/register">Register</a>
      </form>
    </div>
  )
}

export default Login
