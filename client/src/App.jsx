import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { login as authlogin } from "./store/authslice";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const storeused = JSON.parse(localStorage.getItem("userdetails"));
    if (storeused) {
      dispatch(authlogin({ token: storeused.data.jwttoken }));
    }
  });
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
      <Outlet />
    </div>
  );
}

export default App;
