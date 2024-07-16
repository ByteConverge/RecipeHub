import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import SignInPage from "./Pages/SignInPage";
import SignUpPage from "./Pages/SignUpPage";
import Layout from "./Pages/Layout";
import LoggedInLayout from "./Pages/LoggedInLayout";
import Recipes from "./Pages/Recipes";
import LoggedIn from "./Pages/LoggedIn";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          {/*Not logged in */}
          <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          </Route>
          {/*  */}

          {/* logged In */}
          <Route path="/loggedIn" element={<LoggedInLayout />}>
           <Route index element={<LoggedIn />} />
           <Route path="/loggedIn/Recipes" element={<Recipes />} />
          </Route>
          {/*  */}

          <Route path="/signIn" element={<SignInPage />} />
          <Route path="/signUp" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
