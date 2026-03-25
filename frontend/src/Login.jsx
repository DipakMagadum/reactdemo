import { useState } from "react";
export function Login (){

    const [Username,setUsername]=useState("")
    const [Password,setPassword]=useState("")
    const [error,seterror]=useState({Username:"",Password:""})
    const [submit,setSubmit]=useState("")

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

       if(newerror.Username=="" && newerror.Password==""){
        setSubmit("LoGiN SuCeSsFuLlY");
       }else{
        setSubmit("");
       }
    }

    return(
        <>
        <div class="flex justify-center items-center h-screen">
        <form class="flex flex-col shadow-xl/50 rounded w-80 p-7 gap-4 bg-gray-200"
            onSubmit={call}> 

        <h1 class="text-center">Login</h1>

        <label>Username</label>
        <input class="border p-1" type="text" placeholder="please enter registered Username"
          value={Username}
          onChange={(e)=>setUsername(e.target.value)}
        />
        {error.Username && <p style={{ color: "red"}}>{error.Username}</p>}

        <label>Password</label>
        <input class="border p-1" type="password" placeholder="please enter password"
         value={Password}
         onChange={(e) => setPassword(e.target.value)}
        />
        {error.Password && <p style={{ color: "red" }}>{error.Password}</p>}


        <button class="border rounded-xl p-1 bg-orange-400" type="submit"  value="submit">LOGIN</button>
        
        {submit && <p className="text-green-600 text-center">{submit}</p>}

        <p>New User ? <button class="border rounded-xl p-1 bg-blue-300 text-center">Register</button></p>  

      </form>
        </div>
        </>
    )
}
