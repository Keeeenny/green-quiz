// import { useState } from "react";
// import Navbar from "./components/Navbar";
import Index from "./Pages/Index";

function App() {
  return (
    <>
      <Index />
      <footer className="bg-gray-800 px-6 py-8 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-2 text-gray-400">
            Together, we can make a difference for our planet 🌍
          </p>
          <p className="text-sm text-gray-500">
            Climate Quiz App • Educational Tool for Environmental Awareness
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
