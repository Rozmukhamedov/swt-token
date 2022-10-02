import "./style.css";
import { Container, Grid } from "@mantine/core";
import Button from "../../../Components/Button/Button";
import LogoSmall from "../../../assets/img/logo_small.svg";
import BuyBackground from "../../../assets/img/buy_background.svg";

function Buy() {
  return (
    <div className="buy">
      <Container size={"xl"}>
        <Grid>
          <Grid.Col span={12} xs={12} md={6}>
            <div className="buy__texts">
              <h5>Как купить?</h5>
              <p>
                SWT лучше всего покупать и продавать через{" "}
                <span>
                  <a href="http://swtexchage.com/">SWT Exhange</a>
                </span>
                , но их также можно найти на Uniswap и в постоянно растущем
                списке CEX. <br /> <br />
                Так же можно его преобрести проще через наш кошелек{" "}
                <span>
                  <a href="http://eveswt.com/">SWT Wallet</a>
                </span>
              </p>
            </div>
          </Grid.Col>
          <Grid.Col span={12} xs={12} md={6}>
            <div className="buy__card">
              <h5>Купить можно здесь</h5>
              <p>Здесь есть возможность приобрести SWT по выгодному курсу</p>

              <a href="http://swtexchage.com/">
                <Button className={"buy__card-white"}>swtexchange.com</Button>
              </a>

              <a href="http://eveswt.com/">
                <Button className={"buy__card-red"}>SWT Wallet</Button>
              </a>

              <div className="buy__card-small">
                <div className="buy__card-position">
                  <img src={LogoSmall} alt="logo small" />
                  <div className="buy__card-swt">
                    <h6>SWT</h6>
                    <p>343,04232</p>
                  </div>
                  <div className="buy__card-price">
                    <h6>$ 12 345,12</h6>
                    <p>+$ 0,0543 (0,23 %)</p>
                  </div>
                </div>
              </div>
              <img className="buy__card-img" src={BuyBackground} alt="image" />
            </div>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}

export default Buy;
