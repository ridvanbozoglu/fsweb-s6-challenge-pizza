import axios from "axios";
import { toast } from "react-toastify";

const postOrder = async (order) => {
  try {
    const response = await axios.post('https://reqres.in/api/ridvan', order);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error("Error while posting order:", error);
    toast.error(`Something went wrong: ${error.message}`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    throw error; 
  }
};

export default postOrder;
