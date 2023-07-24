import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "./components/ui/Navbar";

import { useAppDispatch } from "./redux/hooks";
import { setLoading, setUser } from "./redux/features/users/userSlice";
import { auth } from "./lib/firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const dispatch = useAppDispatch();
  dispatch(setLoading(true));

  onAuthStateChanged(auth, (user) => {
    // console.log(18, user.email);
    if (user) {
      dispatch(setUser(user.email!));
      dispatch(setLoading(false));
    } else {
      dispatch(setLoading(false));
    }
  });
  // useEffect(() => {

  // }, [dispatch]);

  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>
      {/* <Home></Home> */}
      <div className="mt-10">
        <Outlet />
      </div>
    </>
  );
}

export default App;
