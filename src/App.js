import "./App.css";
import Header from './components/header/Header';
import Hero from './components/Hero/Hero';
import Slider from "./components/Slider/Slider";
import Virtual from './components/Virtual/Virtual';
import Products from './components/Products/Products'
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Slider />
      <Virtual />
      <Products />
    </div>
  );
}

export default App;
