import React,{useState} from "react";
import styled from "styled-components";
import Intro from "./map.tsx";
// Styled Components

// Container for the entire Contact Us section
const ContactSection = styled.section`
position:relative;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #040f16;
  overflow: hidden;

`;

const ContactTop = styled.div`
  position: relative;
  width: 100%;
  height: 28vw;
  background-size: cover;
  background-position-y: -13vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1vw;
`;
export const ContactPatch = styled.div`
  width: 70vw;
  height: 70vw;
  border-radius: 50%;
  box-shadow: inset 1vw 1vw 10vw #2f9cda, 0vw 15vw 50vw #2f9cda;
  position: absolute;
  animation: glow infinite forwards 5s;
  top: -75vw;
  backdrop-filter: blur(2px);
  z-index: 2;
  @keyframes glow {
   0%{
    box-shadow: inset 0vw 0vw 5vw #2f9cda, 0 15vw 60vw #2f9cda;
   }
   50%{
    box-shadow: inset 0vw 0vw 8vw #2f9cda, 0 10vw 50vw #2f9cda;
    
   }
   100%{
    box-shadow: inset 0vw 0vw 5vw #2f9cda, 0 15vw 60vw #2f9cda;
   }
  }
`;
const ContactHead = styled.h1`
  position: relative;
  font-size: 3.5vw;
  color: #fff;
  font-family: "montserrat";
  margin-bottom: 1rem;
  text-align: center;
  z-index: 3;
  margin: 0;
  padding: 0;

  span{
    color: #2f9cda;
  }
`;

const ContactContainer = styled.div`
  width: 80%;
  height: 45vw;
  /* background-color: #040f16; */
  z-index: 4;
  display: flex;
  transform: translateY(-6vw);
  border-radius: 1vw;
  background-image: url({worldmap});
`;
const ContactLeft = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border-right: 1px solid #ddd; */
`;
const ContactRight = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ContactCont = styled.div`
      width: 90%;
    height: 42vw;
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 1vw;
`;
const CsubHead = styled.h2`
  font-size: 2.5vw;
  font-family: "montserrat";
  color: #2f9cda;
  margin: 0;
`;
const CsubDes = styled.div`
  font-size: 1.2vw;
  color:#fff;
`;

// form
const FormContainer = styled.div`
  width: 100%;
  border-radius: 8px;
`;

const InputCont = styled.div` 
  position: relative;
  width: 47.5%;
  background-color: #202020;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  /* gap: 1.5vw; */
  row-gap: 2vw;
  margin: 0;
  background-color: #040f16;

  label{
  position: absolute;
  font-family: 'source sans 3';
  top: .8vw;
  left: .8vw;
  z-index: 0;
  opacity: .8;
  color: #cdcdcd;
  transition: all ease .5s;
  }

  .line1 input{ 
    position: relative;
    background-color: #2f9cda15;
  color:#fff;
  padding: .8vw 0;
  width: 100%;
  font-size: 1rem;
  border: 1px solid #00000000;
  border-radius: 0vw;
  z-index: 1;  
  }
  &:focus {
    outline: none;
    border-color: #00000000;
  }
  
  .line2{
    width: 100%;
  }

  .line2 input{
    background-color: #2f9cda15;
  padding: .8vw 0;
  font-size: 1rem;
  width: 100%;
  border: 1px solid #00000000;
  border-radius: 0;
  color: #fff;
  z-index: 1;
  }
  &:focus {
    outline: none;
    border-color: 1px solid #00000000;
  }
.active{
  top: -1.3vw;
  left: 0.1vw;
  font-size: 1vw;
}
`;





const Selection1 = styled.select`
position: relative;
  width: 100%;
  padding: .8vw 0;
  border-color: rgb(204, 204, 204);
  color: #454545;
  background-color: #2f9cda15;
  z-index: 1;
  color:#fff;
  border: none;

  option{
    color: #FFF;
   background-color: #040f16;
  }
`;

const Textarea = styled.textarea`
  position: relative;
  padding: 0.5vw 0;
  font-size: 1rem;
  width: 100%;
  border: 1px solid #00000000;
  resize: none;
  background-color: #2f9cda15;
  color:#fff;
  z-index: 2;

  &:focus {
    outline: none;
    border-color: #2f9cda;
  }
`;

const Button = styled.button`
  padding: .8vw 2vw;
  width: 100%;
  font-size: 1rem;
  color: #fff;
  background: #2f9cda;
  border: none;
  border-radius: .5vw;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background: #2489c2;
  }
`;

const ContactBotPatch = styled.div`
  position: absolute;
  width: 70vw;
height: 70vw;
border-radius: 50%;
box-shadow: inset 1vw 1vw 10vw #2f9cda, 0vw -15vw 50vw #2f9cda;
rotate: 180deg;
position: absolute;
animation: glow infinite forwards 5s;
bottom: -75vw;
backdrop-filter: blur(2px);
z-index: 2;


/* @keyframes glow1 {
   0%{
    box-shadow: inset 0vw 0vw 5vw #2f9cda, 0vw -15vw -60vw #2f9cda;
   }
   50%{
    box-shadow: inset 0vw 0vw 8vw #2f9cda, 0vw -10vw -50vw #2f9cda;
   }
   100%{
    box-shadow: inset 0vw 0vw 5vw #2f9cda, 0vw -15vw -60vw #2f9cda;
   }
  } */

`;

const Contact = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  .connect{
    width: 100%;
    height: 28vw;
    display: flex;
    gap: 1vw;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  .connect-box{
    width: 13.5vw;
    height: 13.5vw;
    border-radius: 1vw;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    background: #2f9cda15;
    gap:.5vw;
  }
  .icon{
    width: 4vw;
    height: 4vw;
    font-size: 3vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .icon i{
    color: #3da3db;
  }
  .name{
    width: 100%;
    font-family: 'montserrat';
    text-align: center;
    font-size: 1.5vw;
    font-weight: 600;
    color: #fff;
  }
  .des{
    width: 100%;
    font-family: 'source sans 3';
    text-align: center;
    font-size: 1.1vw;
    color: #fff;
  }
  .loc{
    width: 100%;
  }

`;

// ContactUs Component
const ContactUs = () => {
  const [fields, setFields] = useState({
    fullName: "", // Initialize all fields as empty strings
    mobileNumber: "",
    jobTitle: "",
    organization: "",
    emailId: "",
    selectOption:"",
    message:""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };

  const isActive = (fieldName) => fields[fieldName].trim().length > 0;

  const handleNumber = (e) => {
    // Allow only numbers
    const value = e.target.value;
    // Replace any non-numeric character
    e.target.value = value.replace(/[^0-9]/g, "");
  };


    const [selectedValue, setSelectedValue] = useState("");
  
    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };

  return (
    <>
    <ContactSection>
      <ContactTop>
        <ContactPatch></ContactPatch>
        <ContactHead>Let's <span>Talk Business.</span> <br /> But You First</ContactHead>
      </ContactTop>
      <ContactContainer>
        <ContactLeft>
          <ContactCont>
            <CsubHead>Get In Touch</CsubHead>
            <CsubDes>
              Interested in knowing more?
            </CsubDes>
            <FormContainer>
              
              <Form>
                <InputCont className="line1">
                <label className={`label ${isActive("fullName") ? "active" : ""}`}>Full Name:</label>
                <input type="text" name="fullName" value={fields.fullName} onChange={handleInputChange} onFocus={() => {}} />
                </InputCont>
                <InputCont className="line1">
                <label className={`label ${isActive("mobileNumber") ? "active" : ""}`}>Mobile Number:</label>
                <input type="text" name="mobileNumber" value={fields.mobileNumber} onChange={handleInputChange} onInput={handleNumber} />
                </InputCont>
                <InputCont className="line1">
                <label className={`label ${isActive("jobTitle") ? "active" : ""}`}>Job-title</label>
                <input type="text"  name="jobTitle" value={fields.jobTitle} onChange={handleInputChange} />
                </InputCont>
                <InputCont className="line1">
                <label className={`label ${isActive("organization") ? "active" : ""}`}>Organization:</label>
                <input type="text"  name="organization" value={fields.organization} onChange={handleInputChange} />
                </InputCont>
                <InputCont className="line2">
                <label className={`label ${isActive("emailId") ? "active" : ""}`}>Email-Id:</label>
                <input type="email" name="emailId" value={fields.emailId} onChange={handleInputChange} />
                </InputCont>
                <InputCont className="line2">
                <label className={`label ${selectedValue && selectedValue !== "" ? "active" : ""}`}>Select Your Interest:</label>
                <Selection1 onChange={handleChange} value={selectedValue}>
						      <option style={{display:"none"}} className="blank_option"></option>
						      <option value="exhibitor">Exhibitor</option>
						      <option value="speaking">Speaker</option>
						      <option value="delegate">Delegate</option>
						      <option class="sponsor">Sponsor</option>
						      <option value="media-partner">Media Partner</option>
						      <option value="supporting-partner">Supporting Partner</option>
						      <option value="others">Others</option>
                </Selection1>
                </InputCont>
                <InputCont className="line2">
                <label className={`label ${isActive("message") ? "active" : ""}`}>Write Your Message</label>
                <Textarea rows="8" type="text" name="message" value={fields.message} onChange={handleInputChange} />
                </InputCont>
                <Button type="submit">Submit</Button>
              </Form>
            </FormContainer>
          </ContactCont>
        </ContactLeft>
        <ContactRight>
          <ContactCont>
            <CsubHead>Connect with us</CsubHead>
            <CsubDes>
              Get in touch with us today.
            </CsubDes>
            <Contact>
              <div className="connect">
                <div className="connect-box">
                  <div className="icon"> <i class="fa-solid fa-phone"></i> </div>
                  <div className="name">Telephone</div>
                  <div className="des">+91 8971269298</div>
                </div>
                <div className="connect-box">
                  <div className="icon"> <i class="fa-solid fa-envelope"></i> </div>
                  <div className="name">Email</div>
                  <div className="des">info@traiconevents.com</div>
                </div>
                <div className="connect-box loc">
                  <div className="icon"> <i class="fa-solid fa-location-dot"></i> </div>
                  <div className="name">Location</div>
                  <div className="des">#32, Chinmaya Mission Hospital Road, <br /> Indiranagar II Stage, Bangalore – 560 038, India</div>
                </div>
              </div>
              
            </Contact>
          </ContactCont>
        </ContactRight>
      </ContactContainer>
      <Intro/>
      <ContactBotPatch></ContactBotPatch>
    </ContactSection>
    </>
  );
};

export default ContactUs;