import "./style.css";
import Button from "../../../Components/Button/Button";
import ArrowUp from "../../../assets/img/arrow-up-right.svg";
import { Container } from "@mantine/core";

function Hero() {
  return (
    <div className="hero">
      <Container size={"xl"}>
        <h3>
          Криптобанк <br /> в твоем кармане
        </h3>
        <p>
          Абсолютно защищенный криптокошелёк, <br /> в твоём владении, и
          современный <br />
          функционал в удобном формате.
        </p>
        <div className="hero__buttons">
          <Button className={"hero__btn-white"}>
            <span>WhitePaper</span>
            <img src={ArrowUp} alt="" />
          </Button>
          <Button className={"hero__btn-red"}>Скачать</Button>
        </div>
      </Container>
    </div>
  );
}

export default Hero;
