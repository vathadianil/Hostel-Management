import styles from "./login.module.css";

function Login() {
  return (
    // <div className="card bg-primary shadow-soft border-light p-4" cla>
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
            {/* <img
              src={"./hostel.png"}
              alt="Hostel"
              className={`${styles["card-img-top"]}`}
            /> */}
          </div>
          <h2 className={styles.h4}>Sign in</h2>
          {/* <span>Login here using your username and password</span> */}
        </div>
        <div className={styles["card-body"]}>
          <form action="#" className={styles["mt-4"]}>
            <div className={styles["form-group"]}>
              <label htmlFor="userId" className={styles.label}>
                Your User Id
              </label>
              <div className={`${styles["input-group"]}`}>
                <div className={styles["input-group-prepend"]}>
                  <span className={styles["input-group-text"]}>
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
                  </span>
                </div>
                <input
                  className={styles["form-control"]}
                  id="userId"
                  placeholder="Enter User Id"
                  type="text"
                  aria-label="User Id"
                />
              </div>
            </div>
            <div className={styles["form-group"]}>
              <div className={styles["form-group"]}>
                <label
                  htmlFor="exampleInputPassword777"
                  className={styles.label}
                >
                  Password
                </label>
                <div className={`${styles["input-group"]}`}>
                  <div className={styles["input-group-prepend"]}>
                    <span className={styles["input-group-text"]}>
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
                    </span>
                  </div>
                  <input
                    className={styles["form-control"]}
                    id="exampleInputPassword777"
                    placeholder="Password"
                    type="password"
                    aria-label="Password"
                    required={true}
                  />
                </div>
              </div>
              <div className={styles["check-wrapper"]}>
                <div className={styles["form-check"]}>
                  <input
                    className={styles["form-check-input"]}
                    type="checkbox"
                    value=""
                    id="defaultCheck545"
                  />
                  <label
                    className={styles["form-check-label"]}
                    htmlFor="defaultCheck545"
                  >
                    Remember me
                  </label>
                </div>
                <div>
                  <a href="#" className={styles.small}>
                    Lost password?
                  </a>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className={`${styles["btn-primary"]} ${styles["btn"]} ${styles["btn-block"]}`}
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Login;
