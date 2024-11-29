import { FaRegCalendarCheck } from "react-icons/fa6";
import { AiTwotoneContacts } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { MdOutlineDashboard } from "react-icons/md";

function UserDashBoard() {
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