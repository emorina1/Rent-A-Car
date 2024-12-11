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
import sedan_banner from './Components/Assets/Frontend_Assets/banner_sedan.png'
import sports_banner from './Components/Assets/Frontend_Assets/banner_sports.png'
import suv_banner from './Components/Assets/Frontend_Assets/banner_suv.png'
function App() {
  return (
    <div >
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/'element={<Shop/>} />
      <Route path='/sedan'element={<ShopCategory banner ={sedan_banner}category="sedan"/>} />
      <Route path='/sports'element={<ShopCategory banner ={sports_banner}category="sports"/>} />
      <Route path='/suv'element={<ShopCategory banner ={suv_banner}category="suv"/>} />
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
