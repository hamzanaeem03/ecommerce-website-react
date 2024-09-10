import { useState } from "react";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
      <h2 className="text-2xl font-semibold text-center mb-4">
        Signup
      </h2>
     
      <form>
        <div className="mb-6 flex flex-col items-start">
          <label
            htmlFor="fullName"
            className="block text-gray-700 text-sm font-semibold mb-2"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-indigo-500"
            required=""
            placeholder="James Brown"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-6 flex flex-col items-start">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-semibold mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-indigo-500"
            required=""
            placeholder="hello@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6 flex flex-col items-start">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-semibold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-indigo-500"
            required=""
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full mb-6  bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:indigo-500 focus:ring-opacity-50"
        >
          Register
        </button>
        <h5 className="mb-6">or</h5>
        <button
          type="submit"
          className="w-full mb-6  bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:indigo-500 focus:ring-opacity-50"
        >
          Google
        </button>
      </form>
    </div>
  );
};

export default Signup;
