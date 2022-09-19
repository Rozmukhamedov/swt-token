import "./style.css";

function Card({ className, children }: any) {
  return <div className={`${className} card`}>{children}</div>;
}

export default Card;
