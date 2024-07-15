import ContactExpert from "./ContactExpert";
import Navbar from "./Navbar";
import QueAcc from "./QueAcc";
import Tamplate from "./Tamplate";
const Refer = () =>{
    return(
        <>
        <div>
            <ContactExpert />
            <Navbar />
            <QueAcc/>
            <div className="grid sm:place-content-center ">
            <Tamplate />

            </div>
           
        </div>
        </>
    )
}

export default Refer;