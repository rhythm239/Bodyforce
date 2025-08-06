// components/Header.tsx
import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full px-8 py-4 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          GYMBRAND<span className="text-indigo-600"></span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/categories/strength" className="text-gray-600 hover:text-indigo-600">Strength</Link>
          <Link href="/categories/cardio" className="text-gray-600 hover:text-indigo-600">Cardio</Link>
          <Link href="/categories/benches-and-racks" className="text-gray-600 hover:text-indigo-600">Benches & Racks</Link>
          <Link href="/categories/accessories" className="text-gray-600 hover:text-indigo-600">Accessories</Link>
          <Link href="/packages" className="text-gray-600 font-semibold hover:text-indigo-600">Packages</Link>
        </nav>
        <div className="hidden md:flex">
            <Link href="/#contact" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                Contact Us
            </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;