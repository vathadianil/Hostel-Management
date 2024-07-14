"use client";

import { useRouter } from "next/navigation";
import PropTypes, { InferProps } from "prop-types";
import styles from "./custom-button.module.css";

enum ButtonTypes {
  "button",
  "submit",
  "reset",
  undefined,
}

const ComponentPropTypes = {
  type: ButtonTypes,
  label: PropTypes.string,
};
type ComponentTypes = InferProps<typeof ComponentPropTypes>;

function CustomButton({ type, label }: ComponentTypes) {
  const router = useRouter();
  return (
    <button
      type={type}
      onClick={(e) => {
        e.preventDefault();
        router.push("/home");
      }}
      className={`${styles["btn-primary"]} ${styles["btn"]} ${styles["btn-block"]}`}
    >
      {label}
    </button>
  );
}

CustomButton.propTypes = ComponentPropTypes;
export default CustomButton;
