import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const login = async () => {
    if (email && password) {
      const loginRequest: LoginRequest = {
        email,
        password,
      };
      const response = await fetch("http://localhost:5010/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginRequest),
      });
      const data = await response.json();
    }
  };

  return (
    <div className="LoginForm">
      <h1>Login</h1>
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
          <button type="button" onClick={login} style={{ marginTop: "10px" }}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;