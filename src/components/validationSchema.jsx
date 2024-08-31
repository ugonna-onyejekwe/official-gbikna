import * as yup from "yup";

export const ContactFormValidation = yup.object({
  name: yup.string().trim().required("Enter Name"),
  email: yup.string().email().required("Enter email"),
  phoneNumber: yup.string().trim().required("Enter phone number"),
  message: yup.string().trim().required("Enter message"),
});
