import React from "react";

const SubmitButton = ({ formik, name, customClass }) => {
  return (
    <div>
      <button
        type="submit"
        disabled={!(formik.dirty && formik.isValid) || formik.isSubmitting}
        className={
          customClass
            ? customClass
            : "btn btn-success text-center form-group w-100 mt-4 p-1 p-md-3"
        }
      >
        {formik.isSubmitting ? (
          <div className="spinner-border text-light" role="status">
            <span className="sr-only"></span>
          </div>
        ) : (
          name
        )}
      </button>
    </div>
  );
};

export default SubmitButton;
