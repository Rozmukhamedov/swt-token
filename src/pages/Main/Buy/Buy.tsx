import "./style.css";
import { Container, Grid } from "@mantine/core";
import Button from "../../../Components/Button/Button";
import LogoSmall from "../../../assets/img/logo_small.svg";

function Buy() {
  return (
    <div className="buy">
      <Container size={"xl"}>
        <Grid>
          <Grid.Col span={6}>
            <div className="buy__texts">
              <h5>Как купить?</h5>
              <p>
                SWT лучше всего покупать и продавать через{" "}
                <span>SWT Exhange</span>, но их также можно найти на Uniswap и в
                постоянно растущем списке CEX. <br /> <br />
                Так же можно его преобрести проще через наш кошелек{" "}
                <span>SWT Wallet</span>
              </p>
            </div>
          </Grid.Col>
          <Grid.Col span={6}>
            <div className="buy__card">
              <h5>Купить можно здесь</h5>
              <p>Здесь есть возможность приобрести SWT по выгодному курсу</p>
              <Button className={"buy__card-white"}>swtexchange.com</Button>
              <Button className={"buy__card-red"}>SWT Wallet</Button>
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
            </div>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}

export default Buy;
