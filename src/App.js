import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyles } from "./globalStyle";
import Hero from "./components/Hero";
import Products from "./components/Products";
import { productData,productDataTwo } from "./components/Products/data";
import Feature from "./components/Feature";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Hero />
      <Products heading='Choose your favorite' data={productData}/>
      <Feature />
      <Products heading='Sweet Treats for You' data={productDataTwo}/>
      <Footer />
    </Router>
  );
}

export default App;
