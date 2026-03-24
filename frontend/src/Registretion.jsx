export function Registretion(){
    return(
      <>
      <form>
        <div>
            <h1>Registration Form</h1>
            <label for="name">Name</label>
             <input type="text" placeholder="Enter your name"/><br></br>
            Last Name :<input type="text"placeholder="Enter Last Name"/><br></br>
            Email :<input type="email" placeholder="Enter Email"/><br></br>
            Gender :<input type="radio"/>Male
                    <input type="radio"/>Female
                    <input type="radio"/>Other<br></br>
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
    );
}