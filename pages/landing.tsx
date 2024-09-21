// pages/landing.tsx
import Link from 'next/link';
import NavBar from '../components/NavBar';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <NavBar />
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          Welcome to My App
        </h2>
        <p className="text-lg md:text-xl text-gray-500 mb-8">
          Seamlessly manage your account with ease and security.
        </p>
        <div className="space-x-4">
          <Link href="/register">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
              Get Started
            </button>
          </Link>
          <Link href="/login">
            <button className="bg-gray-600 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition">
              Login
            </button>
          </Link>
        </div>
      </main>
      <footer className="py-4 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} My App. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
