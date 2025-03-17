import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login({ setIsLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      setIsLoggedIn(true);
      navigate("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-red-400 to-blue-600flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-purple-600">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-96">
        <form onSubmit={handleLogin} className="space-y-4">
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Login
          </h2>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-400"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
  type="submit"
  class="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-3 rounded-xl text-lg font-bold shadow-lg transform transition-all duration-300 hover:scale-105 hover:from-purple-600 hover:to-pink-500 hover:shadow-xl"
>
  Login
</button>

        </form>
        <p className="text-sm mt-4 text-center text-gray-500">
          Don't have an account?{" "}
          <Link to="/signup" className="text-teal-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
