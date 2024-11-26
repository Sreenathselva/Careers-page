import React, { useState } from 'react';

const Form1 = () => {
  const [activeInput, setActiveInput] = useState("");

  const handleFocus = (inputName) => {
    setActiveInput(inputName);
  };

  const handleBlur = () => {
    setActiveInput("");
  };

  return (
    <form>
      <div className="InputCont">
        <label className={activeInput === "fullName" ? "active" : ""}>Full Name:</label>
        <input
          type="text"
          onFocus={() => handleFocus("fullName")}
          onBlur={handleBlur}
        />
      </div>

      <div className="InputCont">
        <label className={activeInput === "mobile" ? "active" : ""}>Mobile Number:</label>
        <input
          type="text"
          onFocus={() => handleFocus("mobile")}
          onBlur={handleBlur}
        />
      </div>

      <div className="InputCont">
        <label className={activeInput === "jobTitle" ? "active" : ""}>Job-title:</label>
        <input
          type="text"
          onFocus={() => handleFocus("jobTitle")}
          onBlur={handleBlur}
        />
      </div>

      <div className="InputCont">
        <label className={activeInput === "organization" ? "active" : ""}>Organization:</label>
        <input
          type="text"
          onFocus={() => handleFocus("organization")}
          onBlur={handleBlur}
        />
      </div>

      <div className="InputCont1">
        <label className={activeInput === "email" ? "active" : ""}>Email-Id:</label>
        <input
          type="email"
          onFocus={() => handleFocus("email")}
          onBlur={handleBlur}
        />
      </div>

      <div className="InputCont1">
        <label className={activeInput === "interest" ? "active" : ""}>Select Your Interest:</label>
        <select
          name="interest"
          className="form-control"
          onFocus={() => handleFocus("interest")}
          onBlur={handleBlur}
        >
          <option value="">Select</option>
          <option value="exhibitor">Exhibitor</option>
          <option value="speaker">Speaker</option>
          <option value="delegate">Delegate</option>
          <option value="sponsor">Sponsor</option>
          <option value="media-partner">Media Partner</option>
          <option value="supporting-partner">Supporting Partner</option>
          <option value="others">Others</option>
        </select>
      </div>

      <div className="InputCont1">
        <label className={activeInput === "message" ? "active" : ""}>Write Your Message</label>
        <textarea rows="8" onFocus={() => handleFocus("message")} onBlur={handleBlur}></textarea>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form1;
