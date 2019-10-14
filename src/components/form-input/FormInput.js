import React from "react";
import useInput from "../hooks/useInput";
function FormInput() {
  const [email, bindEmail, resetEmail] = useInput();
  const [password, bindPassword, resetPassword] = useInput();

  const submitHandler = e => {
    e.preventDefault();
    resetEmail();
    resetPassword();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>EMAIL</label>
        <input type="text" {...bindEmail} />
        <label>PASSWORD</label>
        <input type="password" {...bindPassword} />
        <button type="submit">CHEK! </button>
      </form>
    </div>
  );
}

export default FormInput;
