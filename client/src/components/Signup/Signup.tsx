function Signup() {/*
  const login = document.getElementById('login-form');
  login.addEventListener('submit', async (e) => {
      e.preventDefault();
      let inputs = document.querySelectorAll('input')
      let response = await fetch('https://allwell-test-app.onrender.com/user/login', {
          method: "PUT",
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
  });*/

  return (
    <div className="signup">
      <form action="/user/register" method="POST">
          <h2>Choose an email and a password</h2>
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Pasword" />
          <input value="Sign-up!" type="submit"/>
          <p id="mail-exists" className="error-message">This email is already registered</p>
          <p id="signup-error" className="error-message">Please, input valid email and password</p>
      </form>
    </div>
  )
}

export default Signup
