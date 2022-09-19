import "./style.css";
import Card from "./Card/Card";
import { Container, Grid } from "@mantine/core";
import TradingChart from "../../../assets/img/Trading Chart.svg";
import Tech from "../../../assets/img/tech.svg";
import Market from "../../../assets/img/market.svg";

function Ecosystem() {
  return (
    <div className="ecosystem">
      <Container size={"xl"}>
        <Grid>
          <Grid.Col span={6}>
            <div className="ecosystem__texts">
              <h5>Экосистема</h5>
              <p>
                Благодаря нашей экосистеме Вы сможете <br /> покупать и
                продавать монеты, <br /> учиться криптовалюте, а так же покупать{" "}
                <br />
                различные товары
              </p>
            </div>
          </Grid.Col>
          <Grid.Col span={6}>
            <Grid>
              <Grid.Col span={12}>
                <Card className={"ecosystem__card-first"}>
                  <h6>SWT Wallet</h6>
                  <p>
                    Нажедный кошелек для хранения <br />и трейдинга Ваших монет
                  </p>
                  <a href="#">Скачать</a>
                  <img
                    className="img-1"
                    src={TradingChart}
                    alt="Trading Chart"
                  />
                </Card>
              </Grid.Col>
              <Grid.Col span={6}>
                <Card className={"ecosystem__card-second"}>
                  <h6>SWT Club</h6>
                  <p>
                    Учись, приводи друзей <br />и зарабатывай на этом
                  </p>
                  <a href="#">Скачать</a>
                  <img className="img-1" src={Tech} alt="teach" />
                </Card>
              </Grid.Col>
              <Grid.Col span={6}>
                <Card className={"ecosystem__card-third"}>
                  <h6>SWT Market</h6>
                  <p>
                    Конфеты, шоколад, <br /> пряники и другое для Вас
                  </p>
                  <a href="#">Скачать</a>
                  <img className="img-1" src={Market} alt="market" />
                </Card>
              </Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}

export default Ecosystem;
