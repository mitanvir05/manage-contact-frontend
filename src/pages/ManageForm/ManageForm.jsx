import axios from "axios";
import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { MdEmail } from "react-icons/md";
import img1 from "../../assets/chat.png"
import img2 from "../../assets/email.png"
import img3 from "../../assets/Delete.png"
const ManageForm = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/contacts");
        setContacts(response.data);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    fetchContacts();
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className="w-[1263px] h-[796px] flex">
      <div className="w-[263px] h-[796px] bg-[#E6E6E6] ">
        <div className="w-[253px] h-[48px] bg-white justify-center ml-1">
          <img src={logo} alt="" className="w-[122px] h-[40px] ml-11" />
        </div>
        <div className="flex justify-center items-center gap-2">
          <div>
            <MdEmail />
          </div>
          <div>
            <h1 className="text-[#3366CC] text-[14px] text-center">
              Contact Management
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#FFF] p-5">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-[32px] text-[#36C]">Contact Management</h1>
          </div>
          <div>
            <label className="input input-bordered flex items-center gap-2 border-blue-700">
              <input type="text" className="grow" placeholder="Search Blogs" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>

          {/* table */}
        </div>
        <div className="mt-10">
          <table className="w-full border-collapse ">
            <thead className="bg-[#36C] text-white w-[940px] h-[55px]">
              <tr className="">
                <th className="rounded-md border border-white ">Name</th>
                <th className="border rounded-md border-white">Phone No</th>
                <th className="border rounded-md border-white">Email</th>
                <th className="border rounded-md border-white">Action</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact.id} className="w-[940px] h-[45px] text-center">
                  <td className="border p-2 bg-[#DADADA] border-white ">
                    {contact.name}
                  </td>
                  <td className="border p-2  bg-[#DADADA] border-white">{contact.phone}</td>
                  <td className="border p-2 bg-[#DADADA] border-white">{contact.email}</td>
                 
                  <td className="border bg-[#DADADA] border-white">
                    <div className="flex justify-between items-center  m-2">
                        <img src={img1} alt="" className="bg-white rounded-full"/>
                        <img src={img2} alt="" className="bg-white rounded-full"/>
                        <button><img src={img3} alt="" className="bg-white rounded-full"/></button>
                    </div>

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageForm;
