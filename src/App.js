import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home'


function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-the-council" element={<About_The_Council />} />
      <Route path="/why_need_a_council" element={<Why_Need_A_Council />} />
      <Route path="/what_we_do" element={<What_We_Do />} />
      <Route path="/who_we_are" element={<Who_We_Are />} />
      <Route path="/stakeholders" element={<Stakeholders />} />
    </Routes>
    </div>
  );
}

export default App;
