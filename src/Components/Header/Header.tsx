import "./style.css";
import { useState } from "react";
import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";
import Logo from "../../assets/img/logo.svg";
import { Container, Drawer } from "@mantine/core";
import LogoText from "../../assets/img/logo_text.svg";
import IconMenu from "../../assets/img/align-justify.svg";
import LogoFooter from "../../assets/img/Group 1490.svg";

function Header() {
  const [opened, setOpened] = useState<boolean>(false);

  return (
    <>
      <div className="header">
        <Container size={"xl"}>
          <div className="header__flex">
            <div className="header__logo">
              <img src={Logo} alt="logo" />
              <img src={LogoText} alt="logo text" />
            </div>
            <ul className="header__menu">
              <li>
                <a href="https://eveswt.com">Exchange</a>
              </li>
              <li>
                <a href="https://explorer.swttoken.com/">Explorer</a>
              </li>
              <li>
                <a href="https://nftswt.com/ru/">Marketplace</a>
              </li>
              <li>
                <a href="https://skyprofit.swttoken.com/">SkyProfit</a>
              </li>
            </ul>
            {/* <Dropdown
              item={"react"}
              items={[
                { value: "react", label: "React" },
                { value: "ng", label: "Angular" },
                { value: "svelte", label: "Svelte" },
                { value: "vue", label: "Vue" },
              ]}
            /> */}
          </div>
        </Container>
      </div>
      <div className="header__mobile">
        <Container size={"xl"}>
          <div className="header__flex">
            <div className="header__logo">
              <img src={Logo} alt="logo" />
              <img src={LogoText} alt="logo text" />
            </div>

            <Button onClick={() => setOpened(true)}>
              <img src={IconMenu} alt="header menu" />
            </Button>
          </div>
        </Container>
        <Drawer
          opened={opened}
          onClose={() => setOpened(false)}
          title={
            <div className="header__logo">
              <img src={Logo} alt="logo" />
              <img src={LogoText} alt="logo text" />
            </div>
          }
          padding="xl"
          size="full"
        >
          <ul className="header__menu-drawer">
            <li>
              <a href="https://eveswt.com">Exchange</a>
            </li>
            <li>
              <a href="https://explorer.swttoken.com/">Explorer</a>
            </li>
            <li>
              <a href="https://nftswt.com/ru/">Marketplace</a>
            </li>
            <li>
              <a href="https://skyprofit.swttoken.com/">SkyProfit</a>
            </li>
          </ul>
          <div className="header__menu-footer">
            <img src={LogoFooter} alt="Лого" />
          </div>
        </Drawer>
      </div>
    </>
  );
}

export default Header;
