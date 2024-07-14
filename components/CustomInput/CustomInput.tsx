import PropTypes, { InferProps } from "prop-types";
import styles from "./custom-input.module.css";

const ComponentPropTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.element,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
};
type ComponentTypes = InferProps<typeof ComponentPropTypes>;
function CustomInput({
  label,
  icon,
  id,
  placeholder,
  type,
  ariaLabel,
}: ComponentTypes) {
  return (
    <div className={styles["form-group"]}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <div className={`${styles["input-group"]}`}>
        <div className={styles["input-group-prepend"]}>
          <span className={styles["input-group-text"]}>{icon}</span>
        </div>
        <input
          className={styles["form-control"]}
          id={id}
          placeholder={placeholder}
          type={type}
          aria-label={ariaLabel}
        />
      </div>
    </div>
  );
}

CustomInput.propTypes = ComponentPropTypes;

export default CustomInput;
