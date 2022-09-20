import Header from "../../Components/Header/Header";
import Ecosystem from "./Ecosystem/Ecosystem";
import Buy from "./Buy/Buy";
import Hero from "./Hero/Hero";
import Mission from "./Mission/Mission";

function MainPage() {
  return (
    <>
      <Header />
      <Hero />
      <Ecosystem />
      <Buy />
      <Mission />
    </>
  );
}

export default MainPage;
