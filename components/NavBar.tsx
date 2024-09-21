import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="w-full py-4 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-xl font-semibold text-gray-800">My App</h1>
        <div className="space-x-6">
          <Link href="/login" className="text-gray-600 hover:text-gray-900 transition">
            Login
          </Link>
          <Link href="/register" className="text-gray-600 hover:text-gray-900 transition">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
