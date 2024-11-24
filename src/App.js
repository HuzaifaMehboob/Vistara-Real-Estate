
import Home from "./Screens/Home";
import Properties from "./Screens/Properties";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './Screens/Contact'
function App() {
  return (
    <div className="w-full h-[100vh] bg-gray-100  overflow-x-hidden">
       <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/reservation" element={<Reservation/>} /> */}
        </Routes>
    </Router>
        
    </div>
  );
}

export default App;
