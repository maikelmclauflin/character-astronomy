import React from "react";
import {
  string,
  func,
} from "prop-types";
const Input = ({
  label,
  text,
  type,
  id,
  value,
  handleChange,
}) => {
  const labelTag = text ? <label htmlFor={label}>{text}</label> : []
  return (
    <div className="form-group">
      {labelTag}
      <input
        type={type}
        className="form-control"
        id={id}
        value={value}
        onChange={handleChange}
        required
      />
    </div>
  )
};
Input.propTypes = {
  label: string.isRequired,
  text: string.isRequired,
  type: string.isRequired,
  id: string.isRequired,
  value: string.isRequired,
  handleChange: func.isRequired,
};
export default Input;