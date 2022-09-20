import { Container, Grid } from "@mantine/core";
import "./style.css";
import Lock from "../../../assets/img/mission/lock.svg";
import Layers from "../../../assets/img/mission/layers.svg";
import Anchor from "../../../assets/img/mission/anchor.svg";

function Mission() {
  return (
    <div className="mission">
      <Container size={"xl"}>
        <Grid>
          <Grid.Col span={12} xs={12} sm={6}>
            <h3>Миссия</h3>
            <div className="mission__text">
              <div className="mission__number">
                <p>1</p>
              </div>
              <p>
                Создать опыт использования <br />
                криптоактивов на уровне современных <br /> банковских
                приложений.
              </p>
            </div>
            <div className="mission__text">
              <div className="mission__number">
                <p>2</p>
              </div>
              <p>
                Сделать использование криптоактивов <br /> простым, легким и
                повседневныи <br />
                для каждого жителя планеты.
              </p>
            </div>
          </Grid.Col>
          <Grid.Col span={12} xs={12} sm={6}>
            <div className="mission__cards">
              <div className="mission__card mission__card-1">
                <h4>Абсолютная защищенность</h4>
                <p>
                  И кошельки, и закрытые ключи, <br />и мнемоническая фраза
                  хранятся <br /> только на вашем устройстве.
                </p>
                <img src={Lock} alt="lock-icon" />
              </div>
              <div className="mission__card mission__card-2">
                <h4>Полное владение</h4>
                <p>
                  Создавайте до 10 аккаунтов и подключайте <br /> внебиржевые
                  кошельки <br /> Кастомизируйте приложение под себя. <br />
                  Самостоятельно определяйте комиссии.
                </p>
                <img src={Layers} alt="lock-icon" />
              </div>
              <div className="mission__card mission__card-3">
                <h4>Передовой функционал</h4>
                <p>
                  Современные протоколы делают <br /> комиссии ниже, а операции
                  быстрее. <br /> Вы всегда используете самые <br /> актуальные
                  криптотехнологии.
                </p>
                <img src={Anchor} alt="lock-icon" />
              </div>
            </div>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}

export default Mission;
