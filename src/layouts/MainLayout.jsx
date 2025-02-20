import React from "react";
import Navbar from "../components/Navbar";

function MainLayout({ children }) {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <p>© 2025 Mehdi Salim Zayani</p>
      </footer>
    </div>
  );
}

export default MainLayout;
