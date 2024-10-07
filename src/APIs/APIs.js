import axios from "axios";
const URL = "https://api.emailjs.com/api/v1.0/email/send/";

export async function sendEmail(data) {
  // try {
  return await axios.post(URL, data);
  //   console.log("Response", response.data);
  //   return response.data;
  // } catch (error) {
  //   console.log("Error", error);
  //   console.log("Error Message", error.message);
  //   return error;
  // }
}
