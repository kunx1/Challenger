import axios from "axios";
export const postLogin = async (body) => {
  console.log(body)
  const url = "http://challenge-react.alkemy.org/";
  const res = await axios
    .post(url, body)
    .then((res) => {
      localStorage.setItem("tokenUser", res?.data.token);
    })
    .catch((err) => alert(err));

  return res;
};
