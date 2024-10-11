import { createContext, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import RegisterPage from "./pages/RegisterPage";
import WelcomePage from "./pages/WelcomePage";
import LoginPage from "./pages/LoginPage";

// Create a socket context
export const SocketContext = createContext<Socket | null>(null);
const SOCKET_SERVER_URL = import.meta.env.VITE_SOCKET_SERVER_URL; // Fallback to localhost

function App() {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    // Initialize the singleton socket instance
    const socketInstance = io(SOCKET_SERVER_URL);
    setSocket(socketInstance);

    // Clean up when the component unmounts to avoid memory leaks
    return () => {
      socketInstance.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={socket}>
      <Router>
        <Routes>
          {/* Define your routes */}
          <Route path="/" element={<WelcomePage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* Uncomment and add other routes as needed */}
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </SocketContext.Provider>
  );
}

export default App;
