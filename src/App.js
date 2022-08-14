//Router import
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

//Component import
import Detail from "./pages/detail/Detail";
import SignIn from "./pages/signin/SignIn";
import Main from "./pages/main/Main";
import SignUp from "./pages/signup/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/main" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
