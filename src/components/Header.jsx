import React from 'react'

export default function Header() {
  return (
    <header className="bg-[#003580] text-white py-2.5 px-4 text-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-6">
          <span>List your property</span>
          <span>INR</span>
        </div>

        <div className="flex gap-6">
          <button className="hover:underline">Register</button>
          <button className="font-medium hover:underline">Sign in</button>
        </div>
      </div>
    </header>
  );
}
