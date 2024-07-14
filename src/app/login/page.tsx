import styles from "./login.module.css";
import CustomInput from "../../../components/CustomInput/CustomInput";
import CustomCheckBox from "../../../components/CustomCheckBox/CustomCheckBox";
import CustomButton from "../../../components/CustomButton/CustomButton";

function Login() {
  return (
    <main className={styles.container}>
      <div
        className={`${styles.card} ${styles["bg-primary"]} ${styles["shadow-soft"]} ${styles["border-light"]} ${styles["p-4"]}`}
      >
        <div className={`${styles["card-header"]}`}>
          <div className={`${styles["logo-container"]}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`${styles["card-img-top"]} ${styles["shadow-soft"]} ${styles["border-light"]}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
              />
            </svg>
          </div>
          <h2 className={styles.h4}>Sign in</h2>
        </div>
        <div className={styles["card-body"]}>
          <form action="#" className={styles["mt-4"]}>
            <CustomInput
              label={"Your User Id"}
              id="userId"
              placeholder="Enter User Id"
              type="text"
              ariaLabel="User Id"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={styles["size-6"]}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              }
            />
            <div className={styles["form-group"]}>
              <CustomInput
                label={"Password"}
                id="password"
                placeholder="Password"
                type="text"
                ariaLabel="Password"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={styles["size-6"]}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                    />
                  </svg>
                }
              />
              <div className={styles["check-wrapper"]}>
                <CustomCheckBox
                  type="checkbox"
                  id="rememberMe"
                  label={"Remember me"}
                />
                <div>
                  <a href="#" className={styles.small}>
                    Lost password?
                  </a>
                </div>
              </div>
            </div>
            <CustomButton type={"button"} label={"Sign In"} />
          </form>
        </div>
      </div>
    </main>
  );
}

export default Login;
