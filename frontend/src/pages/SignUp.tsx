import React from "react";
import styles from "./SignUp.module.scss";
import { Link, useNavigate } from "react-router-dom";

type StateType = {
  email: string;
  password: string;
  repeatPassword: string;
  emailError?: string;
  passwordError?: string;
};

export const SignUp: React.FC = () => {
  const navigate = useNavigate();

  const [state, setState] = React.useState<StateType>({
    email: "",
    password: "",
    repeatPassword: "",
    emailError: "",
    passwordError: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const validateEmail = () => {
    if (state.email && !state.email.endsWith("@nu.edu.kz")) {
      setState({
        ...state,
        emailError: "Email is not valid, it should be NU-based",
      });
      return false;
    } else {
      setState({
        ...state,
        emailError: "",
      });
      return true;
    }
  };

  const validatePasswords = () => {
    if (!state.repeatPassword || state.password !== state.repeatPassword) {
      setState({
        ...state,
        passwordError: "Passwords do not match",
      });
      return false;
    } else {
      setState({
        ...state,
        passwordError: "",
      });
      return true;
    }
  };

  const handleLogIn = () => {
    const emailValidation = validateEmail();
    let passwordsValidation;
    if (emailValidation) {
      passwordsValidation = validatePasswords();
    }
    if (emailValidation && passwordsValidation) {
      navigate("/login");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h2>Sign Up</h2>
        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            className={
              state.emailError ? styles.errorBorder : styles.defaultBorder
            }
            value={state.email || ""}
            onChange={handleChange}
            onBlur={validateEmail}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={state.password || ""}
            onChange={handleChange}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="repeat-password">Repeat password</label>
          <input
            type="password"
            id="repeat-password"
            name="repeatPassword"
            className={
              state.passwordError ? styles.errorBorder : styles.defaultBorder
            }
            value={state?.repeatPassword || ""}
            onChange={handleChange}
            onBlur={validatePasswords}
          />
        </div>
        {state.emailError && <p className={styles.error}>{state.emailError}</p>}
        {state.passwordError && (
          <p className={styles.error}>{state.passwordError}</p>
        )}
        <button onClick={handleLogIn}>Sign Up</button>
        <p className={styles.login}>
          Already registered?{" "}
          <Link to="/login">
            <a>Log In</a>
          </Link>
        </p>
      </div>
    </div>
  );
};
