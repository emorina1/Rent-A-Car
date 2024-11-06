import './App.css';
import Navbar from './Components/Navbar/Navbar';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import ShopCategory from './Pages/ShopCategory';
import About from './Pages/About';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/Frontend_Assets/banner_mens.png'
import women_banner from './Components/Assets/Frontend_Assets/banner_women.png'
import kid_banner from './Components/Assets/Frontend_Assets/banner_kids.png'
function App() {
  return (
    <div >
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/'element={<Shop/>} />
      <Route path='/skincare'element={<ShopCategory banner ={men_banner}category="skincare"/>} />
      <Route path='/hand'element={<ShopCategory banner ={women_banner}category="hand"/>} />
      <Route path='/wash'element={<ShopCategory banner ={kid_banner}category="wash"/>} />
      <Route path='/about'element={<About/>} />
      <Route path='/product'element={<Product/>}>
        <Route path=':productId'element={<Product/>}/>
      </Route>
      <Route path='/cart'element={<Cart/>} />
      <Route path='/login'element={<LoginSignup/>} />
     </Routes>
     <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
