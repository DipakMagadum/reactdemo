import { useState } from "react";
export function Registretion(){
  const[name,setname]=useState("")
  const[lname,setlname]=useState("")
  const[email,setemail]=useState("")
  const[gender,setgender]=useState(false)
  const[city,setcity]=useState(false)
  const[error,seterror]=useState({name:"",lname:"",email:"",gender:"",city:""})
   
  function Regcall(e){
    e.preventDefault()
    let Msg={name:"",lname:"",email:"",gender:"",city:""}
   let validate=true
    if(name==""){
        Msg.name="Enter a name"
        validate=false
    }
    if(lname==""){
        Msg.lname="Enter last name"
        validate=false
    }
    if(email==""){
        Msg.email="Enter email"
        validate=false
    } else if (!email.includes("@")){
        Msg.email="invalid email"
    }if(gender==false){
        Msg.gender="Select gender"
        validate=false
    }if(city==false){
        Msg.city="Select city"
        validate=false
    } seterror(Msg)
    if(validate){
      alert("Registration succesfully")
    };
    seterror(Msg)
  } 
    return(
      <>
      <div className="bg-amber-100">
      <form 
       className="flex justify-center item-center h-screen" onSubmit={Regcall} noValidate>
        <div className="border-3  justify-center item-center h-110 w-80 m-20 bg-gray-200 shadow-xl/50">
            <div className=" justify-center item-center m-10">
            <h1 className="text-center text-xl mt-10" style={{fontSize:25}}><b>Registration Form</b></h1>
            <label >Name</label><br></br>
             <input className="border p-1 w-60 bg-white  " type="text" placeholder="Enter your name"onChange={(e)=>setname(e.target.value)} /><br></br>
             <p className="text-red-500">{error.name}</p>
             <label>Last Name:</label><br></br>
            <input className="border p-1 w-60 bg-white" type="text"placeholder="Enter Last Name"onChange={(e)=>setlname(e.target.value)}/><br></br>
            <p className="text-red-500">{error.lname}</p>
            <label>Email:</label><br></br>
            <input className="border p-1 w-60 bg-white"  type="email" placeholder="Enter Email" onChange={(e)=>setemail(e.target.value)}/><br></br>
            <p className="text-red-500">{error.email}</p>
            <label> Gender:</label><br></br>
           <input className="ml-2" type="radio" name="gender"/>Male
                    <input className="ml-2" type="radio" name="gender"/>Female
                    <input className="ml-2" type="radio" name="gender"/>Other<br></br>
                    <label>City:</label>
              <select className="bg-white ml-10 mt-5 h-8">
                <option>Select City</option>
                    <option>Pune</option>
                    <option>Mumbai</option>
                    <option>Dheli</option>
                    <option>Kolhapur</option>
                    <option>Belgam</option>
                </select><br></br>
                <button className="cursor-pointer border-1 shadow-xl/10 ml-18 mt-5 h-10 w-25 rounded-2xl bg-blue-100">Submit</button>
                </div>
        </div>
     </form>
     </div>
    </>
    );
}