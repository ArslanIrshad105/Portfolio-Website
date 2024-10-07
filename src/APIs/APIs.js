import axios from "axios";
const URL = "https://api.emailjs.com/api/v1.0/email/send";

export async function sendEmail(data) {
  try {
    const response = await axios.post(URL, data);
    console.log("Response", response.data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}
