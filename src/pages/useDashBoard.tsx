import { FaRegCalendarCheck } from "react-icons/fa6";
import { AiTwotoneContacts } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { MdOutlineDashboard } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {  USER_KEY, getSession,deleteSession} from '../utilities/validation';



function UserDashBoard() {
    const navigate = useNavigate();
    // Check whether the isLoggedIn flag is equal to true and redirect the user to the dashboard
    useEffect(() => {
        const isLogged = getSession(USER_KEY) as string
        const logginDetails = JSON.parse(isLogged)
  
        if(logginDetails === null || !logginDetails.isLoggedIn){
          navigate("/logIn")
          return
        }
    },[navigate])

    function handleLogOut() {
        deleteSession(USER_KEY)
        navigate("/logIn")
    }

  return (
    <div className="flex items-center  gap-4 w-[80%] mx-auto mt-[80px]">
        <div>
            <div className="flex items-center gap-2.5 mb-3">
                <MdOutlineDashboard />
                <p>Overview</p>
            </div>
            <div className="flex items-center gap-2.5 mb-3">
                <FaRegCalendarCheck />
                <p>Calendar</p>
            </div>
            <div className="flex items-center gap-2.5 mb-3">
                <MdEmail />
                <p>Messgaes</p>
            </div>
            <div className="flex items-center gap-2.5 mb-3">
                <AiTwotoneContacts />
                <p>Contacts</p>
            </div>
            <div className="flex items-center gap-2.5 mb-3" >
                <button onClick={handleLogOut} className="bg-slate-500 flex items-center gap-2.5 mb-3"> <MdLogout /> LogOut </button>
            </div>
        </div>
        <div >
            <div className="flex  flex-row items-center justify-center gap-5">
                <p className="text-2xl">Welcome user</p>
            </div>
        </div>
    </div>
  )
}

export default UserDashBoard