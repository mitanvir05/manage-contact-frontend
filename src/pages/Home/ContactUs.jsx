import axios from "axios";
import contact from "../../assets/contact.png";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "01700955009",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
  };

  const handleContact = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/contacts",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      // Add feedback to the user upon successful submission
      alert("Message Send Successfully");
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    } catch (error) {
      console.log(error);
      alert("Error Occured");
    }
  };

  return (
    <div className="w-[1280px] h-[706px]">
      <div className="flex justify-between">
        <div className="w-1/2">
          <h1 className="text-5xl mt-5 p-5 text-gray-600">Contact Us</h1>
          <div>
            <form onSubmit={handleContact}>
              <div className="p-5">
                <label className="input input-bordered rounded-2xl flex items-center gap-2 mb-3 w-full">
                  <FaUser />
                  <input
                    type="text"
                    name="name"
                    className="grow"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </label>
                <label className="input input-bordered rounded-2xl flex items-center gap-2 mb-3 w-full">
                  <MdEmail />
                  <input
                    type="email"
                    name="email"
                    className="grow"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </label>
                <div>
                  <label className="input rounded-2xl input-bordered h-24 flex gap-2 mb-3 w-full text-gray-500">
                    Message
                    <input
                      type="text"
                      name="message"
                      className="grow"
                      placeholder=""
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </label>
                </div>
              </div>
              <div className="p-5">
                <button
                  type="submit"
                  className="bg-primary text-white px-3 py-5 rounded-xl w-full"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-1/2">
          <img src={contact} alt="" className="w-[80%]" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
