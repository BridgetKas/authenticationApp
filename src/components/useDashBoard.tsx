import { FaRegCalendarCheck } from "react-icons/fa6";
import { AiTwotoneContacts } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { MdOutlineDashboard } from "react-icons/md";

function UserDashBoard() {
  return (
    <div>
        <div>
            <div>
                <MdOutlineDashboard />
                <p>Overview</p>
            </div>
            <div>
                <FaRegCalendarCheck />
                <p>Calendar</p>
            </div>
            <div>
                <MdEmail />
                <p>Messgaes</p>
            </div>
            <div>
                <AiTwotoneContacts />
                <p>Contacts</p>
            </div>
        </div>
        <div>

        </div>
    </div>
  )
}

export default UserDashBoard