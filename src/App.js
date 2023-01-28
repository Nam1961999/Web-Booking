import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Detail from "./pages/detail/Detail";
import Search from "./pages/search/Search";
import Navbar from "./pages/Navbar/Navbar";
import Header from "./Parts/Header";
import Footer from "./Parts/Footer";
import RegisterForm  from "./../src/Component/Body/RegisterForm"
function App() {

  return (
    <>
      <div className="navbar">
        <Navbar />
        <Header />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/" element={<Search />} />
          <Route path="/search/:key" element={<Search />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/:unknown" element={<Home/>}/>    
        </Routes>
      </BrowserRouter>
      
      <div className="navbar_footer">
      <RegisterForm />
        <Footer />
       
      </div>
    </>

  );
}

export default App;
