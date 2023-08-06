import axios from "axios";
import { useSelector } from "react-redux";
export const ResetToken = async () => {
  const token = useSelector((state) => state.tokenRefresh.value);
  console.log(token);
  try {
    const response = await axios.post("http://127.0.0.1:8000/token/refresh/", {
      refresh: token,
    });
    console.log(response.data);
    localStorage.setItem("token", response.data.access);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
