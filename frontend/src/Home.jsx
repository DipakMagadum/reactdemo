import {Link} from "react-router-dom";
export function Home(){

    return(
        <>
        <div >
           <nav className="flex bg-sky-600 h-20 items-center justify-end p-5 ">
             <ul>

                <div className=" flex  gap-7 text-lg text-white ">

                    <li className="border p-2 " ><input type="text" /></li>
                <li className="hover:bg-sky-500 p-1 rounded">
                    <Link to="/login">Login</Link>
                </li>

                <li  className="hover:bg-sky-500 p-1 rounded">
                    <Link to="/">Home</Link>
                </li>

                <li  className="hover:bg-sky-500 p-1 rounded">
                     <Link to="/Registration">Registration</Link>
                </li>
                </div>
            </ul>
           </nav>
        </div>
        </>
    )
}