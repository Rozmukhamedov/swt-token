import "./style.css";
import { useState } from "react";
import { Container, Grid } from "@mantine/core";
import Button from "../../../Components/Button/Button";

function Roadmap() {
  const [buttonActive, setButtonActive] = useState<string>("2021");
  const [buttonActiveQ, setButtonActiveQ] = useState<string>("");
  const [dropdown, setDropdown] = useState<boolean>(false);
  const texts = [
    {
      text: "Прием средств с биржевых кошельков",
      color: "#81DF90",
    },
    {
      text: "Блокчейн SWT",
      color: "#81DF90",
    },
    {
      text: "Криптопроцессинг P2P",
      color: "#81BDDF",
    },
    {
      text: "Интеграция с Etherium",
      color: "#81BDDF",
    },
    {
      text: "Интеграция с Bitcoin",
      color: "#D9DDE0",
    },
  ];
  const years = ["2021", "2022", "2023", "2024"];
  const codeQS = ["Q1", "Q2", "Q3", "Q4"];
  return (
    <div className="roadmap">
      <Container size={"xl"}>
        <h3>Roadmap</h3>
        <Grid>
          <Grid.Col span={12} xs={12} md={6}>
            <div className="roadmap__column">
              <div className="roadmap__flex">
                {years.map((year, index) => (
                  <Button
                    key={index}
                    className={`roadmap__btn ${
                      buttonActive == year ? "active" : null
                    }`}
                    onClick={() => setButtonActive(year)}
                  >
                    {year} год
                  </Button>
                ))}
              </div>
              <div className="roadmap__flex">
                {codeQS.map((codeQ) => (
                  <Button
                    className={`roadmap__btn ${
                      buttonActiveQ == codeQ ? "active" : null
                    }`}
                    onClick={() => setButtonActiveQ(codeQ)}
                  >
                    {codeQ}
                  </Button>
                ))}
              </div>
            </div>
            <div className="dropdown">
              <p onClick={() => setDropdown(!dropdown)}>{buttonActive} год</p>
              {dropdown ? (
                <div className="dropdown__column">
                  {years.map((year, index) => (
                    <div
                      key={index}
                      className="dropdown__p"
                      onClick={() => {
                        setButtonActive(year);
                        setDropdown(false);
                      }}
                    >
                      {year} год
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </Grid.Col>
          <Grid.Col span={12} xs={12} md={6}>
            <div className="roadmap__flex-texts">
              {texts?.map((text, index) => (
                <Button key={index} className={"roadmap__btn active"}>
                  <div
                    className="circle"
                    style={{ background: text.color }}
                  ></div>
                  {text.text}
                </Button>
              ))}
            </div>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}

export default Roadmap;
