import { FC, ChangeEvent, FormEvent, useState } from "react";
import styles from "./Form.module.css";

const Form: FC = () => {
  const [entredTitle, setEntredTitle] = useState("");
  const [entredFirstName, setEntredFirstName] = useState("");
  const [entredLastName, setEntredLastName] = useState("");
  const [entredEmail, setEntredEmail] = useState("");
  const [agree, setAgree] = useState(false);

  const titleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEntredTitle(event.target.value);
  };
  const firstNameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEntredFirstName(event.target.value);
  };
  const lastNameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEntredLastName(event.target.value);
  };
  const emailChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEntredEmail(event.target.value);
  };
  const agreeWithTermsOfService = () => {
    setAgree(true);
  };

  const formHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log({
      title: entredTitle,
      firstName: entredFirstName,
      lastName: entredLastName,
      email: entredEmail,
      agree: agree,
    });

    setEntredTitle("");
    setEntredFirstName("");
    setEntredLastName("");
    setEntredEmail("");
    setAgree(false);
  };

  return (
    <form className={styles.form} onSubmit={formHandler}>
      <input
        type="text"
        placeholder="Title"
        onChange={titleChangeHandler}
        value={entredTitle}
      />
      <div className={styles["username-inputs"]}>
        <input
          type="text"
          placeholder="First name"
          onChange={firstNameChangeHandler}
          value={entredFirstName}
        />
        <input
          type="text"
          placeholder="Last name"
          onChange={lastNameChangeHandler}
          value={entredLastName}
        />
      </div>
      <input
        type="email"
        placeholder="E-mail"
        onChange={emailChangeHandler}
        value={entredEmail}
      />
      <button className={styles["signup-btn"]} type="submit">
        Sign up <span className={styles.arrow}>&rarr;</span>
      </button>
      <div className={styles.checkbox}>
        <input
          type="checkbox"
          id="checkbox"
          onChange={agreeWithTermsOfService}
          checked={agree}
        />
        <label htmlFor="checkbox">
          I have read and agree to the <a href="#">Terms of Service</a>
        </label>
      </div>
    </form>
  );
};

export default Form;
