import { useState } from "react";
export function Registretion(){
  const[name,setname]=useState("")
  const[lname,setlname]=useState("")
  const[email,setemail]=useState("")
  const[gender,setgender]=useState("")
  const[city,setcity]=useState("")
  const[error,seterror]=useState({name:"",lname:"",email:"",gender:"",city:""})
   
  function Regcall(e){
    e.preventDefault()
    let Msg={name:"",lname:"",email:"",gender:"",city:""}
   let validate=true
    if(name==""){
        Msg.name="Enter your name"
        validate=false
    }
    if(lname==""){
        Msg.lname="Enter  your lastname"
        validate=false
    }
    if(email==""){
        Msg.email="Enter your email"
        validate=false
    } else if (!email.includes("@")){
        Msg.email="invalid email"
    }if(!gender){
        Msg.gender="Select gender"
        validate=false
    }if(!city){
        Msg.city="Select city"
        validate=false
    } seterror(Msg)
    if(validate){
      alert("Registration succesfully")
    };
  } 
    return(
      <>
      <div className="flex justify-center item-center h-screen">
      <form 
       className=" flex flex-col border rounded-xl  w-90 p-7" onSubmit={Regcall} noValidate>
    
            <h1 className="text-center text-xl " style={{fontSize:25}}><b>Registration Form</b></h1>
            <label >Name</label>
             <input className="border p-1 w-60 bg-white  " type="text" placeholder="Enter your name"onChange={(e)=>setname(e.target.value)} />
             <p className="text-red-500 h-5">{error.name}</p>
             <label>Last Name:</label>
            <input className="border p-1 w-60 bg-white" type="text"placeholder="Enter your Last Name"onChange={(e)=>setlname(e.target.value)}/>
            <p className="text-red-500 h-5">{error.lname}</p>
            <label>Email:</label>
            <input className="border p-1 w-60 bg-white"  type="email" placeholder="Enter your Email" onChange={(e)=>setemail(e.target.value)}/>
            <p className="text-red-500 h-5">{error.email}</p>
            <label> Gender:</label>
           <input className="ml-2" type="radio" name="gender" onChange={(e)=>setgender(e.target.value)}/>Male
                    <input className=" ml-2" type="radio" name="gender" onChange={(e)=>setgender(e.target.value)}/>Female
                    <input className="ml-2" type="radio" name="gender" onChange={(e)=>setgender(e.target.value)}/>Other
                    <p className="text-red-500 h-5">{error.gender}</p>
                    <label>City:</label>
              <select className="bg-white ml-10 mt-5 h-8" onChange={(e)=>setcity(e.target.value)}>
                <option>Select City</option>
                    <option>Pune</option>
                    <option>Mumbai</option>
                    <option>Dheli</option>
                    <option>Kolhapur</option>
                    <option>Belgam</option>
                </select>
                <p className="text-red-500 h-5">{error.city}</p>
                <button className="cursor-pointer border-1 shadow-xl/10 ml-18 mt-2 h-10 w-25 rounded-2xl bg-blue-100 ">Submit</button>
                
    
     </form>
     </div>
    </>
    );
}
