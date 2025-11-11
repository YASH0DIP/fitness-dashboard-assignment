import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Overview from "./pages/Overview";
import { useState } from "react";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar (hidden on small screens) */}
        <div
          className={`fixed inset-y-0 left-0 z-40 transform bg-white shadow-md transition-transform duration-300 lg:relative lg:translate-x-0 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Sidebar onClose={() => setIsSidebarOpen(false)} />
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          <Navbar onMenuClick={() => setIsSidebarOpen(true)} />
          <main className="p-4 sm:p-6">
            <Routes>
              <Route path="/" element={<Overview />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;