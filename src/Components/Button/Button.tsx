import React from "react";

function Button(props: any) {
  return (
    <button
      style={props}
      type={props.type}
      disabled={props.disabled}
      onClick={props.onClick}
      className={props.className}
    >
      {props.children}
    </button>
  );
}

export default Button;
