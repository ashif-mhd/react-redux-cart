import './App.css';
import {BrowserRouter as Router,Route , Routes} from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import { Shop } from './pages/Shop';
import { Cart } from './pages/Cart';
import { Productt } from './Helpers/Productt';
import { Provider } from 'react-redux';
import store from './redux/reducer/store';





function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/productt/:id' element={<Productt/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
     </Router>
    </div>
    </Provider>
  );
}

export default App;
