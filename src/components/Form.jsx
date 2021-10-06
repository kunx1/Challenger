import { useState } from "react";
import { postLogin } from "../api/postLogin";
import { useHistory } from "react-router-dom";
import "../styles/form.css";
const Form = () => {
  const history = useHistory();
  const [body, setBody] = useState([
    {
      email: "",
      password: "",
    },
  ]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(body)
    if (body.email === "" || body.password === "") {
      alert("not be empty");
      console.log('empy')
    } else {
      await postLogin(body);
      goToHome();
    }
  };
  const goToHome = () => {
    history.push("/");
  };
  const handleChange = (e) => {
    e.preventDefault();
    setBody({
      ...body,
      [e.target.name]: e.target.value,
    });
    console.log(body);
  };
  return (
    <div id="formContent">
      <div className="fadeIn first">
        <h1 className="header">Login</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="login"
          className="fadeIn second"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="password"
          id="password"
          className="fadeIn third"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <input type="submit" className="fadeIn fourth" value="Log In" />
      </form>

      <div id="formFooter">
        <a className="underlineHover" href="/">
          Forgot Password?
        </a>
      </div>
    </div>
  );
};

export default Form;
