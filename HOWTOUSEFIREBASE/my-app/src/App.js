import React,{useState} from "react";
import { useFirebase } from "./context/Firebase";
import "./App.css";

function App() {

  const firebase=useFirebase();
  console.log(firebase);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <h1>FireBase</h1>
      <label >Email</label>
        <input 
        onChange={(e)=>setEmail(e.target.value)}
        value={email}
        type="email" 
        placeholder="Enter your email"
        required
        />
        <label >Password</label>
        <input 
        onChange={e=>setPassword(e.target.value)}
        value={password}
        type="password" 
        placeholder="Enter your password" 
        required/>
        <button onClick={()=>{
        firebase.signUpUserWithEmailAndPassword(email,password)
        firebase.putData('users/'+"piyush garg"+{email,password})
        }}>Sign Up</button>
    </div>
  );
}

export default App;
