import { Route, Routes } from "react-router";

import Homepage from "./Pages/Homepage/Homepage";
import Authpage from "./Pages/Authpage/Authpage";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/auth" element={<Authpage />}></Route>

      </Routes>
    </>
  );
}

export default App;
