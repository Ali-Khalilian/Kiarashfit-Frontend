import { ErrorMessage, FastField } from "formik";
import PersonalError from "./PersonalError";

const Input = (props) => {
  return (
    <div className="form-group my-3">
      <label htmlFor={props.id}>{props.label}:</label>
      <FastField
        className="form-control mt-3"
        placeholder={`${props.label} خود را وارد کنید`}
       {...props}
      />
      <ErrorMessage name={props.name} component={PersonalError} />
    </div>
  );
};

export default Input;