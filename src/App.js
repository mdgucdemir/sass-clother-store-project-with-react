import "./App.scss";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Products from "./components/products/Products";
import Slide from "./components/slide/Slide";

function App() {
  return (
    <div className="container">
      <Header />
      <Slide />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
