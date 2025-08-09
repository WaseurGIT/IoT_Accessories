import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
// import DarkVeil from "./components/DarkVeil";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
      {/* <DarkVeil
        hueShift={20}
        noiseIntensity={0.1}
        scanlineIntensity={0.1}
        scanlineFrequency={10}
        warpAmount={0.05}
        speed={1}
        resolutionScale={1}
      /> */}
      <div>
        <Navbar onSearch={setSearchQuery} />
        <Banner></Banner>
        <Products searchQuery={searchQuery} />
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
