import { Routes, Route } from "react-router-dom";
import Locate from "../paginas/Locate";

const body = () => {
  return (
    <div className="div_body">
      <Routes>
        <Route path="locate" element={<Locate />} />
      </Routes>
    </div>
  );
}; 
export default body;
