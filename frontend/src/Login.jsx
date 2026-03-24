export { useState } from "react";
export function Login (){

    const [Username,setname]=useState("")
    const [Password,setpassword]=useState("")
    const [error,seterror]=useState({Username:"",Password:""})

    function call(e){

       e.preventDefault()
       let newerror = {Username:"",Password:""}

       if(Username=""){
        newerror.name="please enter Username"
       }
       if(Password=""){
        newerror.password="please enter password"
       }

       seterror(newerror)
    }

    return(
        <>
        <form>

        <h1>Login Page</h1>

        <label>Username</label>
        <input type=text placeholder="please enter registered Username">

        <label>Password</label>
        <input type="text" placeholder="please enter password">

        <button>LOGIN<button>

        <button>Register</button>   

        </form>
        </>
    )
}