import "./style.css";
import { Container, Grid } from "@mantine/core";
import IMG1 from "../../../assets/img/information/img1.svg";
import IMG2 from "../../../assets/img/information/img2.svg";
import IMG3 from "../../../assets/img/information/img3.svg";
import IMG4 from "../../../assets/img/information/img4.svg";

import IMGM1 from "../../../assets/img/information/operation 1.svg";
import IMGM2 from "../../../assets/img/information/Start.svg";
import IMGM3 from "../../../assets/img/information/Start1.svg";
import IMGM4 from "../../../assets/img/information/wallet 1.svg";

function Information() {
  return (
    <Container size={"xl"}>
      <div className="inforamtion">
        <Grid>
          <Grid.Col span={12} xs={12} md={6} orderLg={1}>
            <img className="image__desktop" src={IMG1} alt="image 1" />
            <img className="image__mobile" src={IMGM1} alt="image 1" />
          </Grid.Col>
          <Grid.Col span={12} xs={12} md={6} orderLg={2}>
            <div className="inforamtion__texts">
              <h3>Основной функционал</h3>
              <p>
                Просматривайте свои операции, пополняйте, переводите, покупайте
                монеты, следите за курсом, переключайтесь между одим из 10
                аккаунтов и фиксируйте свой доход внутри SWT Wallet
              </p>
            </div>
          </Grid.Col>
          <Grid.Col span={12} xs={12} md={6} orderLg={4}>
            <Grid>
              <Grid.Col span={6} md={6}>
                <img className="image__desktop" src={IMG2} alt="image 2" />
                <img className="image__mobile" src={IMGM2} alt="image 2" />
              </Grid.Col>
              <Grid.Col span={6} md={6}>
                <img className="image__desktop" src={IMG3} alt="image 3" />
                <img className="image__mobile" src={IMGM3} alt="image 3" />
              </Grid.Col>
            </Grid>
          </Grid.Col>
          <Grid.Col span={12} xs={12} md={6} orderLg={3}>
            <div className="inforamtion__texts">
              <h3>Обменник</h3>
              <p>
                Обменивайте свои монеты с минимальной комиссией и максимальной
                выгодой
              </p>
            </div>
          </Grid.Col>
          <Grid.Col span={12} xs={12} md={6} orderLg={5}>
            <img className="image__desktop" src={IMG4} alt="image 4" />
            <img className="image__mobile" src={IMGM4} alt="image 4" />
          </Grid.Col>
          <Grid.Col span={12} xs={12} md={6} orderLg={6}>
            <div className="inforamtion__texts">
              <h3>Простая и понятная аналитика</h3>
              <p>
                Следите за курсом, чтобы выгодно купить монету. Наша аналитика
                поможет Вам с этим
              </p>
            </div>
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col></Grid.Col>
        </Grid>
      </div>
    </Container>
  );
}

export default Information;
