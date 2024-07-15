import { BrowserRouter, Routes ,Route } from "react-router-dom"
import Homepage from "./Pages/Homepage"
import SignInPage from "./Pages/SignInPage"
import SignUpPage from "./Pages/SignUpPage";


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />

      
            <Route path="/signIn" element={<SignInPage />} />
            <Route path="/signUp" element={<SignUpPage />} />
         
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
