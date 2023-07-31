import { useState } from "react";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const registerUser = async () => {
    if (email && username && password) {
      const regRequest: RegistrationRequest = {
        email,
        username,
        password,
      };

      const response = await fetch("http://localhost:5010/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(regRequest),
      });

      const data = await response.json();
      console.log(data);
    }
  };
    
  return (
    <div>
      <h1>Register</h1>
      <form action="#">
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <input
          type="username"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button
            type="button"
            onClick={registerUser}
            style={{ marginTop: "10px" }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;