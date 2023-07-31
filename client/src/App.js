import TextEditor from "./TextEditor";
import {
  BrowserRouter as Router,
  Switch, 
  Route,
  Redirect
} from 'react-router-dom'
import { v4 as uuidV4 } from 'uuid'
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import { useState } from "react";


function App() {
  const [token, setToken] = useState("");
  

  

  return (
  <Router>
    <Switch>
      <Route path="/" exact>
        <Redirect to={`/documents/${uuidV4()}`} />
      </Route>
      <Route path="/documents/:id">
        <LoginForm />   
        <RegisterForm />
        <TextEditor />
      </Route>
    </Switch>
  </Router>
  )
}

export default App;
