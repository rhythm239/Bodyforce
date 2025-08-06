import Link from 'next/link';
import React from 'react';

type ButtonProps = {
  href: string;
  children: React.ReactNode;
};

const Button = ({ href, children }: ButtonProps) => {
  return (
    <Link
      href={href}
      className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
    >
      {children}
    </Link>
  );
};

export default Button;
