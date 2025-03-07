import { BrowserRouter, Routes, Route } from "react-router-dom";

//steps
import Menu from "./stages/Menu";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
