import "./App.scss";
import Header from "./components/header/Header";
import Products from "./components/products/Products";
import Slide from "./components/slide/Slide";

function App() {
  return (
    <div className="container">
      <Header />
      <Slide />
      <Products />
    </div>
  );
}

export default App;
