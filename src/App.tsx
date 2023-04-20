import './App.css'
import Home from "./pages/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <>
        <Wrapper>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Home />} />
                    <Route path={'/login'} element={<Login />} />
                </Routes>
            </BrowserRouter>
        </Wrapper>
    </>
  )
}

export default App
