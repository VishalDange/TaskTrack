import { ThemeProvider } from "@emotion/react";
import darkTheme from "./theme/darkTheme";
import Navbar from "./Page/Navbar/Navbar";
import Sidebar from "./Page/Sidebar/Sidebar";
import Home from "./Page/Home/Home";
import Auth from "./Page/Auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTasks, fetchUsersTasks } from "./ReduxToolkit/TaskSlice";
import { getUserProfile } from "./ReduxToolkit/AuthSlice";
function App() {
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getUserProfile(localStorage.getItem("jwt")));
  }, [auth.jwt]);

  useEffect(() => {
    if (auth.user?.role === "ROLE_ADMIN") {
      dispatch(fetchTasks());
    } else {
      dispatch(fetchUsersTasks());
    }
  }, [auth.user]);
  return (
    <ThemeProvider theme={darkTheme}>
      {auth.user ? (
        <div>
          <Navbar />
          <Home />
        </div>
      ) : (
        <Auth />
      )}
    </ThemeProvider>
  );
}

export default App;
