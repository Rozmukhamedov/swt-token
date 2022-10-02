import "./style.css";
import { Container, Grid } from "@mantine/core";
import swtImage from "../../assets/img/swt.svg";
import etheriumImage from "../../assets/img/etherium.svg";
import binanceImage from "../../assets/img/binance.svg";

function Table() {
  const data = [
    "Block time",
    "Time-to-finality",
    "Simple transaction  performance",
    "Complex transaction  performance",
    "Sharding support",
    "Cross-shard communication",
  ];

  const swtData = [
    "1 sec.",
    "Under 3 sec.",
    "High",
    "High",
    "Maх. 2 shards per workchain",
    "Near-instant",
  ];

  const etheriumData = [
    "12 sec",
    "10-15 min.",
    "Potentially high",
    "Low",
    "Max. 26 shards",
    "Slow time-to-finality",
  ];

  const binanceData = [
    "1 sec.",
    "6.4 sec.",
    "High",
    "Very low",
    "None",
    "None",
  ];

  return (
    <>
      <div className="table">
        <Container size="xl">
          <Grid>
            <Grid.Col span={12} xs={3} md={3}>
              <div className="table__texts" style={{ padding: "15px 0" }}>
                {data.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </Grid.Col>
            <Grid.Col span={12} xs={3} md={3}>
              <div className="table__card">
                <div className="table__card-img">
                  <img src={swtImage} alt="swg image" />
                  <p>SWT</p>
                </div>
                <div className="table__texts">
                  {swtData.map((data, index) => (
                    <p key={index + 100}>{data}</p>
                  ))}
                </div>
              </div>
            </Grid.Col>
            <Grid.Col span={12} xs={3} md={3}>
              <div className="table__card">
                <div className="table__card-img">
                  <img src={etheriumImage} alt="etherium image" />
                  <p>Etherium 2.0</p>
                </div>
                <div className="table__texts">
                  {etheriumData.map((data) => (
                    <p key={data}>{data}</p>
                  ))}
                </div>
              </div>
            </Grid.Col>
            <Grid.Col span={12} xs={3} md={3}>
              <div className="table__card">
                <div className="table__card-img">
                  <img src={binanceImage} alt="binance image" />
                  <p>Binance</p>
                </div>
                <div className="table__texts">
                  {binanceData.map((data, index) => (
                    <p key={index}>{data}</p>
                  ))}
                </div>
              </div>
            </Grid.Col>
          </Grid>
        </Container>
      </div>
      <div className="table__mobile">
        <Container size="xl">
          <div className="table__mobile-flex">
            <div className="table__mobile-icons">
              <div className="table__mobile-img">
                <img src={swtImage} alt="swg image" />
                <p>SWT</p>
              </div>
              <div className="table__mobile-img">
                <img src={etheriumImage} alt="etherium image" />
                <p>Etherium 2.0</p>
              </div>
              <div className="table__mobile-img">
                <img src={binanceImage} alt="binance image" />
                <p>Binance</p>
              </div>
            </div>
            <div className="table__mobile-data">
              <div className="table__flex">
                <div className="table__mobile-texts table__mobile_td">
                  {data.map((item, index) => (
                    <p key={index + 50}>{item}</p>
                  ))}
                </div>
                <div className="table__mobile-texts">
                  {swtData.map((data, index) => (
                    <p key={index + 60}>{data}</p>
                  ))}
                </div>
                <div className="table__mobile-texts">
                  {swtData.map((data, index) => (
                    <p key={index + 70}>{data}</p>
                  ))}
                </div>
                <div className="table__mobile-texts">
                  {swtData.map((data, index) => (
                    <p key={index + 80}>{data}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Table;
