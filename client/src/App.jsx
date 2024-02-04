import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { login as authlogin } from "./store/authslice";
import { Header } from "./components";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const storeused = JSON.parse(localStorage.getItem("userdetails"));
    if (storeused) {
      dispatch(authlogin({ token: storeused.data.jwttoken }));
    }
  });
  return (
    <div className="flex flex-col  min-h-screen bg-gray-900 text-white">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
