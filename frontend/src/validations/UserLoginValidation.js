import * as yup from "yup";

export const userLoginValidationSchema = yup.object({
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup.string().required("Required"),
});
