import "./style.css";
import { useState } from "react";

// type Props = {
//   data: [];
//   error?: string;
//   variant?: string | null;
//   placeholder?: string;
//   label?: string;
//   description?: string;
// };

function Dropdown(props: any) {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [itemState, setItemState] = useState<string>(props?.item);

  return (
    <div className="dropdown">
      <div
        className="dropdown__text"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <span> {props.icon}</span>
        <span className="text">{itemState}</span>
        <div className="dropdown__icon-down">
          <svg
            width="7"
            height="5"
            viewBox="0 0 7 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.227806 0.227806C0.531547 -0.0759353 1.02401 -0.0759353 1.32775 0.227806L3.5 2.40006L5.67225 0.227806C5.97599 -0.0759353 6.46845 -0.0759353 6.77219 0.227806C7.07594 0.531547 7.07594 1.02401 6.77219 1.32775L4.20711 3.89284C3.81658 4.28336 3.18342 4.28336 2.79289 3.89284L0.227806 1.32775C-0.0759353 1.02401 -0.0759353 0.531547 0.227806 0.227806Z"
              fill="#9A9AAB"
            />
          </svg>
        </div>
      </div>
      {dropdownOpen ? (
        <div className="dropdown__items">
          {props.items?.map((item: any, id: number) => (
            <div
              className={"dropdown__item"}
              key={id}
              onClick={() => {
                setItemState(item?.value);
                setDropdownOpen(false);
              }}
            >
              {item?.value}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default Dropdown;
