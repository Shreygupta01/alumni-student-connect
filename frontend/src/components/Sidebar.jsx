import React from "react";
import { useNavigate } from "react-router-dom";
import { 
  House, 
  MessageSquareMore, 
  Globe, 
  Users, 
  SquareChevronRight, 
  Settings, 
  LogOut 
} from "lucide-react";
import { assets } from "../assets/assets"; // Ensure the assets are imported correctly
import { handleSuccess } from "../utils/utils";

const Sidebar = ({ setActiveSection, activeSection }) => {
  const navigate = useNavigate();

  // Handles logout process
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    handleSuccess("Logged Out Successfully");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  // Reusable function to render sidebar menu items
  const renderMenuItem = (section, IconComponent, label) => (
    <li
      className={`flex items-center gap-3 py-3.5 px-3 md:px-9 cursor-pointer ${
        activeSection === section ? "bg-[#F2F3FF] border-r-4 border-primary" : ""
      }`}
      onClick={() => setActiveSection(section)}
    >
      <IconComponent />
      <p>{label}</p>
    </li>
  );

  return (
    <div className="fixed top-0 left-0 w-64 min-h-screen bg-white border-r font-outfit">
      {/* Logo Section */}
      <div className="flex justify-center py-5">
        <img
          src={assets.Logo}
          alt="Logo"
          className="h-16 w-auto cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>

      {/* Sidebar Menu */}
      <ul className="text-[#2B64BB] mt-5">
        {renderMenuItem("dashboard", House, "Dashboard")}
        {renderMenuItem("messages", MessageSquareMore, "Messages")}
        {renderMenuItem("events", Globe, "Events")}
        {renderMenuItem("network", Users, "Network")}
        {renderMenuItem("open-source", SquareChevronRight, "Open Source")}
        {renderMenuItem("mentor-page", Globe, "Mentorship")}
        <br />
        <br />
        <br />
        <br />
        {renderMenuItem("settings", Settings, "Settings")}
        <li className="flex items-center gap-3 py-3.5 px-3 md:px-9 cursor-pointer text-red-500">
          <button onClick={handleLogout} className="flex items-center gap-3 w-full">
            <LogOut />
            <p>Logout</p>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

