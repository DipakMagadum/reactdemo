export function Registretion(){
    return
    (<>
     <form>
        <div>
            <h1>Registretion Form</h1>
            Name : <input type="text" placeholder="Enter your name"></input><br></br>
            Last Name :<input type="text"placeholder="Enter Last Name"></input><br></br>
            Email :<input type="email" placeholder="Enter Email"></input><br></br>
            Gender :<input type="radio"value={male}>Male</input>
                    <input type="radio" value={female}>Female</input>
                    <input type="radio" value={other}>Other</input><br></br>
             City :
             <select>
                <option>Select City</option>
                    <option>Pune</option>
                    <option>Mumbai</option>
                    <option>Dheli</option>
                    <option>Kolhapur</option>
                    <option>Belgam</option>
                </select>
                <button>Submit</button>
        </div>
     </form>
    </>
    )
}