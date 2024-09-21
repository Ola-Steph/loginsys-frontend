// pages/register.tsx
import { useState } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await axios.post('http://localhost:5000/api/register', { email, password });
      alert('Registration successful!');
    } catch (error) {
      console.error(error);
      alert('Registration failed');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <div className="flex flex-col items-center justify-center mt-20">
        <h1 className="text-4xl font-bold mb-6">Register</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 p-2 border rounded-md w-64"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 p-2 border rounded-md w-64"
        />
        <button onClick={handleRegister} className="bg-blue-500 text-white px-6 py-2 rounded-md">
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
