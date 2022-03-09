import React from "react";

import { Navbar } from "./components/Navbar";
import { Routes } from "./components/Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { getToken } from "./utils/token";
import { useDispatch } from "react-redux";
import api from "./utils/api";
import { GET_USER_INFO } from "./store/types/UserTypes";
import { Footer } from "./components/Footer";

function App() {
  const dispatch = useDispatch();
  const token = getToken();
  const [status, setStatus] = React.useState(false);

  React.useEffect(() => {
    if (token) {
      api
        .get("/account/profile/")
        .then((res) => {
          dispatch({ type: GET_USER_INFO, payload: res.data });
          setStatus(true);
        })
        .catch((err) => {});
    } else {
      const refreshToken = localStorage.getItem("token");
      refreshToken
        ? api
            .get("/account/refresh/", {
              params: {
                token: refreshToken,
              },
            })
            .then((res) => {
              localStorage.setItem("token", res.data);
              setStatus(true);
            })
            .catch((err) => {
              console.log(err);
            })
        : setStatus(true);
    }
  }, [token]);

  return (
    <>
      {status && (
        <Router>
          <div className="App">
            <Navbar />
            <main>
              <Routes />
            </main>
            {/*<Footer/>*/}
          </div>
        </Router>
      )}
    </>
  );
}

export default App;
