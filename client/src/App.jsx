import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
      <Outlet />
    </div>
  );
}

export default App;
