import { useEffect, useState } from "react";
import JobList from "./JobList";
import { TbLogout } from "react-icons/tb";

export default function Dashboard() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser")) || {};
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(
      "https://www.themuse.com/api/public/jobs?category=Software%20Engineering&page=1&descending=false"
    )
      .then((res) => res.json())
      .then((data) => setList(data?.results));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    window.location.href = "/";
  };

  return (
    <div className="p-6">
   <div className="w-full flex justify-between items-center p-4 rounded-2xl bg-white/20 backdrop-blur-md shadow-lg border border-white/10">
  <div className="text-2xl font-extrabold flex items-center">
    <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-transparent bg-clip-text text-4xl font-extrabold">K</span>
    <span className="ml-1 text-gray-800 dark:text-white">odJobs</span>
  </div>
  <div className="flex justify-center items-center gap-4">
    <h1 className="text-2xl font-medium text-gray-900 dark:text-white">Hi, {currentUser.username}!</h1>
    <button
      onClick={handleLogout}
      className="bg-yellow-400 text-black p-2 flex justify-center items-center rounded-xl cursor-pointer shadow-md hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
    >
      <TbLogout className="text-2xl" />
    </button>
  </div>
</div>

      <JobList list={list} />
    </div>
  );
}
