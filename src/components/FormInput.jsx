import React from "react";

const FormInput = ({ label, name, type, defaultValue }) => {
  return (
    <fieldset className="fieldset">
      <legend className="fieldset-legend capitalize">{label}</legend>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className="input"
        placeholder="Type here"
      />
    </fieldset>
  );
};

export default FormInput;
