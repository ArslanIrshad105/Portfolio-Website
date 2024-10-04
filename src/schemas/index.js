import * as Yup from "yup";

export const contactForm = Yup.object({
  firstName: Yup.string()
    .max(25, "Maximum limit reached")
    .required("First Name is required.")
    .matches(
      /^[a-zA-Z'-\s]*$/,
      "Special Characters and Numbers are not allowed."
    ),
  lastName: Yup.string()
    .max(25, "Maximum limit reached")
    .required("Last Name is required.")
    .matches(
      /^[a-zA-Z'-\s]*$/,
      "Special Characters and Numbers are not allowed."
    ),
  email: Yup.string()
    .required("Email is required.")
    .matches(
      /^[a-zA-Z0-9._%+-]+[a-zA-Z0-9]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Please enter a valid email."
    ),
  phoneNumber: Yup.string()
    .nullable()
    .optional()
    .min(5, "Please enter a valid Phone Number")
    .max(30, "Please enter a valid Phone Number")
    .matches(/^[0-9]+$/, "Please enter a valid Phone Number"),
  subject: Yup.string().required("Field is required"),
  message: Yup.string().required("Please tell me how i can help"),
});
