import * as Yup from "yup";

export const schema = [
  Yup.object().shape({
    email: Yup.string()
      .email("Enter valid email")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Minimum 8 characters"),
  }),

  Yup.object().shape({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
  }),
];
