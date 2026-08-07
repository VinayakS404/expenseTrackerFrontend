import { Routes, Route, BrowserRouter } from "react-router";
import HomePage from "./components/HomePage.tsx";
import Chart from "./components/Chart.tsx";
import Pagination from "./components/Pagination.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="/page" element={<Pagination />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
