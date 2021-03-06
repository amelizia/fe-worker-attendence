import React, { Component }  from "react";
import Navbar from '../../Components/side-navbar';
import Profile from '../../Components/welcomeprofile';
import Address from './address';
import Topbar from '../../Components/top-navbar';
import Maps from '../../Components/maps';
// import Sidebar from '../../Components/sidebar';

class  Attendance extends Component {
    
  render() {
    return (
        <div className="content">
            {/* Layout for side menu */}
            <div className=" md:contents hidden">
                <Navbar />
            </div>
            <div className="sm:contents">
                <Topbar />
            </div>
        {/* Layout for Dashboard */}
        <div className="bg-whi-custom-1">
        <div className="flex h-screen flex-col">
            <div className="mt-6 ml-6 font-bold"> 
            <h1 className="2xl:text-4xl md:text-2xl text-xl mb-6">Dashboard</h1>
            {/* Layout for profile */}
            <div className="mb-6">
                <Profile />
            </div>
            <h1 className="2xl:text-4xl md:text-2xl text-lg mb-4">
            {new Date()
                .toLocaleDateString("en-GB", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric"
                })
                .replace(/ /g, " ")}
            </h1>
            {/* Layout for Geo */}
                <div className="mr-6 p-8 grid justify-center place-items-center bg-white-custom-2 rounded-xl">
                <svg className="animate-bounce" width="58" height="71" viewBox="0 0 58 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35.6895 66.8229C30.2987 72.2061 28.0713 72.5756 22.3032 66.8229C4.92645 47.5723 0 45.9421 0 29.4229C0 13.1791 12.9872 0 29 0C45.0128 0 58 13.1719 58 29.4229C58 44.6162 54.7568 46.8985 35.6895 66.8229ZM29.029 8.94788C17.9209 8.94788 8.91694 17.9175 8.91694 28.981C8.91694 40.0372 17.9209 49.0068 29.029 49.0068C40.1371 49.0068 49.1484 40.0372 49.1484 28.981C49.1411 17.9102 40.1371 8.94788 29.029 8.94788ZM26.7653 31.1835V13.3602H31.2274V26.7277H40.1516V31.1835H31.2274H26.7653Z" fill="#333333"/>
                </svg>
                    <Address />
                </div>
            </div>
        </div>
        </div>
      </div>
      
    );
   }
  };

export default Attendance;