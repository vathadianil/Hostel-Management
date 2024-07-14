import PropTypes, { InferProps } from "prop-types";
import styles from "./custom-checkbox.module.css";

const ComponentPropTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
};
type ComponentTypes = InferProps<typeof ComponentPropTypes>;

function CustomCheckBox({ type, id, label }: ComponentTypes) {
  return (
    <div className={styles["form-check"]}>
      <input
        className={styles["form-check-input"]}
        type={type}
        value=""
        id={id}
      />
      <label className={styles["form-check-label"]} htmlFor={id}>
        {label}
      </label>
    </div>
  );
}

CustomCheckBox.propTypes = ComponentPropTypes;

export default CustomCheckBox;
