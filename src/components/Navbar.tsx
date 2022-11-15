import React from "react";

const Navbar = () => {
  return (
    <div className="container mx-auto rounded-lg bg-slate-400 mb-5">
      <ul className="flex justify-center gap-x-10 py-5 bg-primary">
        <li>Home</li>
        <li>History</li>
        <li>Profile</li>
      </ul>
    </div>
  );
};

export default Navbar;
