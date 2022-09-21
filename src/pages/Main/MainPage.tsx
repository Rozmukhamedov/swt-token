import Header from "../../Components/Header/Header";
import Ecosystem from "./Ecosystem/Ecosystem";
import Buy from "./Buy/Buy";
import Hero from "./Hero/Hero";
import Mission from "./Mission/Mission";
import Footer from "../../Components/Footer/Footer";

function MainPage() {
  return (
    <>
      <Header />
      <Hero />
      <Ecosystem />
      <Buy />
      <Mission />
      <Footer />
    </>
  );
}

export default MainPage;
