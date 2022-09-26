import Header from "../../Components/Header/Header";
import Ecosystem from "./Ecosystem/Ecosystem";
import Buy from "./Buy/Buy";
import Hero from "./Hero/Hero";
import Mission from "./Mission/Mission";
import Footer from "../../Components/Footer/Footer";
import Table from "../../Components/Table/Table";

function MainPage() {
  return (
    <>
      <Header />
      <Hero />
      <Ecosystem />
      <Table />
      <Buy />
      <Mission />
      <Footer />
    </>
  );
}

export default MainPage;
