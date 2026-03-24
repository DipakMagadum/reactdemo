import { useState } from "react";
export function Login (){

    const [Username,setUsername]=useState("")
    const [Password,setPassword]=useState("")
    const [error,seterror]=useState({Username:"",Password:""})

    function call(e){

       e.preventDefault()
       let newerror = {Username:"",Password:""}

       if(Username==""){
        newerror.Username="please enter Username"
       }
       if(Password==""){
        newerror.Password="please enter password"
       }

       seterror(newerror)
    }

    return(
        <>
        <form onSubmit={call}>

        <h1>Login Page</h1>

        <label>Username</label>
        <input type="text" placeholder="please enter registered Username"
          value={Username}
          onChange={(e)=>setUsername(e.target.value)}
        />
        {error.Username && <p style={{ color: "red"}}>{error.Username}</p>}

        <label>Password</label>
        <input type="text" placeholder="please enter password"
         value={Password}
         onChange={(e) => setPassword(e.target.value)}
        />
        {error.Password && <p style={{ color: "red" }}>{error.Password}</p>}


        <button type="submit">LOGIN</button>

        <button>Register</button>   

        </form>
        </>
    )
}
