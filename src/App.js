//Router import
import { Routes, Route, useNavigate } from 'react-router-dom';

//Component import
import Detail from './pages/detail/Detail';
import SignIn from './pages/signin/SignIn';
import Main from './pages/main/Main';
import SignUp from './pages/signup/SignUp';
import Profile from './pages/profile/Profile';
import { useEffect } from 'react';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.Authorization) {
      navigate(`/`);
    }
    return () => {};
  }, [JSON.stringify(localStorage.Authorization)]);

  return (
    <Routes>
      <Route
        path="/"
        element={localStorage.Authorization ? <Main /> : <SignIn />}
      />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/main" element={<Main />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<Main />} />
    </Routes>
  );
}

export default App;
