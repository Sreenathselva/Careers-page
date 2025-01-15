import React from "react";
import styled from "styled-components";
import contactBg from "../images/contact-img.jpg";
// Styled Components

// Container for the entire Contact Us section
const ContactSection = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #000;
`;
const ContactTop = styled.div`
  position: relative;
  width: 100%;
  height: 38vw;
  background-image: url(${contactBg});
  background-size: cover;
  background-position-y: -13vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1vw;
`;
const ContactPatch = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: linear-gradient(to right, #2f9cdacd, #0c2e41cd, #0c2e41cd);
  backdrop-filter: blur(2px);
  z-index: 2;
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
`;
const ContactTag = styled.p`
  position: relative;
  font-size: 1.4rem;
  color: #fff;
  font-family: "source sans 3";
  text-align: center;
  z-index: 3;
  margin: 0;
  padding: 0;
`;
const ContactContainer = styled.div`
  width: 80%;
  height: 45vw;
  background-color: #fff;
  z-index: 4;
  display: flex;
  transform: translateY(-10vw);
  border-radius: 1vw;
`;
const ContactBlack = styled.div`
  position: absolute;
  width: 120%;
  height: 10vw;
  background-color: #000;
  bottom: -7vw;
  z-index: 3;
  rotate: -3deg;
  border-top: 5px solid #2f9cda70;
`;
const ContactLeft = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border-right: 1px solid #ddd; */
`;
const ContactRight = styled.div`
  width: 55%;
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
  justify-content: center;
  gap: 1vw;
`;
const CsubHead = styled.h2`
  font-size: 2.5vw;
  font-family: "montserrat";
  color: #0c2e41;
  margin: 0;
`;
const CsubDes = styled.div`
  font-size: 1.2vw;
`;

const Cboxes = styled.div`
  width: 100%;
  height: 33vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Cbox = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
`;
const CLeft = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CRight = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5vw;

  .sub-head {
    font-size: 1.5vw;
    font-weight: 500;
    font-family: "montserrat";
  }
  .sub-point {
    font-size: 1.2vw;
    font-family: "source sans 3";
  }
`;

const CIcon = styled.div`
  width: 5vw;
  height: 5vw;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #2f9cda;
  border: 2px solid #cdcdcd;

  svg {
    width: 50%;
    fill: #fff;
  }
`;
const FollowBox = styled.div`
  position: relative;
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1vw;
  &:hover svg {
    fill: #000;
  }
  &:hover svg path {
    fill: #000;
  }
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    display: block;
    top: 0;
    background-color: #cdcdcd;
  }

  .follow-sub-head {
    font-size: 1.3vw;
    font-family: "montserrat";
    font-weight: 500;
    padding-left: 2vw;
  }
  .follow-icons {
    display: flex;
    gap: 1vw;
    padding-left: 2vw;
  }
  .follow-icon {
    width: 2.5vw;
    height: 2.5vw;
    font-size: 1.5vw;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #2f9cda;
    color: #fff;
  }
`;
const MapComponent = styled.div`
  width: 100%;
  height: 60vh;
`;

// form
const FormContainer = styled.div`
  width: 100%;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1vw;
  row-gap: 1.5vw;
  margin: 0;
  background-color: transparent;
`;

const InputCont = styled.div`
  position: relative;
  width: auto;
  label {
    position: absolute;
    top: 0.6vw;
    left: 0.8vw;
    z-index: 0;
    color: #454545;
  }
`;
const InputCont1 = styled.div`
  position: relative;
  width: 100%;
  label {
    position: absolute;
    top: 0.6vw;
    left: 0.8vw;
    z-index: 0;
    color: #454545;
  }
`;

const Selection1 = styled.select`
  position: relative;
  width: 100%;
  padding: 0.8vw;
  border-radius: 0.8vw;
  border-color: rgb(204, 204, 204);
  color: #454545;
  background: #00000000;
  z-index: 1;
`;

const Input1 = styled.input`
  position: relative;
  background-color: #00000000;
  padding: 0.8vw;
  width: 17.3vw;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.8vw;
  z-index: 1;

  &:focus {
    outline: none;
    border-color: #2f9cda;
  }
`;
const Input2 = styled.input`
  background-color: #00000000;
  padding: 0.8vw;
  font-size: 1rem;
  width: 95%;
  border: 1px solid #ccc;
  border-radius: 0.8vw;
  z-index: 1;

  &:focus {
    outline: none;
    border-color: #2f9cda;
  }
`;
const Textarea = styled.textarea`
  padding: 0.5vw;
  font-size: 1rem;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 0.8vw;
  resize: none;

  &:focus {
    outline: none;
    border-color: #2f9cda;
  }
`;

const Button = styled.button`
  padding: 0.8vw 2vw;
  font-size: 1rem;
  color: #fff;
  background-color: #2f9cda;
  border: none;
  border-radius: 0.5vw;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2f9cda;
  }
`;

// ContactUs Component

const ContactUs = () => {
  const handleInputChange = (e) => {
    // Allow only numbers
    const value = e.target.value;
    // Replace any non-numeric character
    e.target.value = value.replace(/[^0-9]/g, "");
  };
  return (
    <>
      <ContactSection>
        <ContactTop>
          <ContactPatch></ContactPatch>
          <ContactBlack></ContactBlack>
          <ContactHead>CONTACT US</ContactHead>
          <ContactTag>
            "Get Our Expert’S Advice Before Moving Forward! <br />
            We Love To Get Feedback & Meeting New Challenges "
          </ContactTag>
        </ContactTop>
        <ContactContainer>
          <ContactLeft>
            <ContactCont>
              <CsubHead>Get In Touch</CsubHead>
              <CsubDes>Interested in knowing more?</CsubDes>
              <Cboxes>
                <Cbox>
                  <CLeft>
                    <CIcon>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0"
                        y="0"
                        viewBox="0 0 368.16 368.16"
                        style={{ enableBackground: "new 0 0 512 512" }}
                        xmlSpace="preserve"
                        class=""
                      >
                        <g>
                          <path
                            d="M184.08 0c-74.992 0-136 61.008-136 136 0 24.688 11.072 51.24 11.536 52.36 3.576 8.488 10.632 21.672 15.72 29.4l93.248 141.288c3.816 5.792 9.464 9.112 15.496 9.112s11.68-3.32 15.496-9.104l93.256-141.296c5.096-7.728 12.144-20.912 15.72-29.4.464-1.112 11.528-27.664 11.528-52.36 0-74.992-61.008-136-136-136zM293.8 182.152c-3.192 7.608-9.76 19.872-14.328 26.8l-93.256 141.296c-1.84 2.792-2.424 2.792-4.264 0L88.696 208.952c-4.568-6.928-11.136-19.2-14.328-26.808-.136-.328-10.288-24.768-10.288-46.144 0-66.168 53.832-120 120-120s120 53.832 120 120c0 21.408-10.176 45.912-10.28 46.152z"
                            opacity="1"
                            data-original="#000000"
                            class=""
                          ></path>
                          <path
                            d="M184.08 64.008c-39.704 0-72 32.304-72 72s32.296 72 72 72 72-32.304 72-72-32.296-72-72-72zm0 128c-30.872 0-56-25.12-56-56s25.128-56 56-56 56 25.12 56 56-25.128 56-56 56z"
                            opacity="1"
                            data-original="#000000"
                            class=""
                          ></path>
                        </g>
                      </svg>
                    </CIcon>
                  </CLeft>
                  <CRight>
                    <div className="sub-head">Head Office</div>
                    <div className="sub-point">
                      #32, Chinmaya Mission Hospital Road, Indiranagar II Stage,
                      Bangalore – 560 038, India
                    </div>
                  </CRight>
                </Cbox>
                <Cbox>
                  <CLeft>
                    <CIcon>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0"
                        y="0"
                        viewBox="0 0 512 512"
                        style={{ enableBackground: "new 0 0 512 512" }}
                        xmlSpace="preserve"
                        class=""
                      >
                        <g>
                          <path
                            d="M467 76H45C20.137 76 0 96.262 0 121v270c0 24.885 20.285 45 45 45h422c24.655 0 45-20.03 45-45V121c0-24.694-20.057-45-45-45zm-6.302 30L287.82 277.967c-8.5 8.5-19.8 13.18-31.82 13.18s-23.32-4.681-31.848-13.208L51.302 106h409.396zM30 384.894V127.125L159.638 256.08 30 384.894zM51.321 406l129.587-128.763 22.059 21.943c14.166 14.166 33 21.967 53.033 21.967s38.867-7.801 53.005-21.939l22.087-21.971L460.679 406H51.321zM482 384.894 352.362 256.08 482 127.125v257.769z"
                            opacity="1"
                            data-original="#000000"
                            class=""
                          ></path>
                        </g>
                      </svg>
                    </CIcon>
                  </CLeft>
                  <CRight>
                    <div className="sub-head">Email</div>
                    <div className="sub-point">Info@traiconevents.com</div>
                  </CRight>
                </Cbox>
                <Cbox>
                  <CLeft>
                    <CIcon>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0"
                        y="0"
                        viewBox="0 0 473.806 473.806"
                        style={{ enableBackground: "new 0 0 512 512" }}
                        xmlSpace="preserve"
                        class=""
                      >
                        <g>
                          <path
                            d="M374.456 293.506c-9.7-10.1-21.4-15.5-33.8-15.5-12.3 0-24.1 5.3-34.2 15.4l-31.6 31.5c-2.6-1.4-5.2-2.7-7.7-4-3.6-1.8-7-3.5-9.9-5.3-29.6-18.8-56.5-43.3-82.3-75-12.5-15.8-20.9-29.1-27-42.6 8.2-7.5 15.8-15.3 23.2-22.8 2.8-2.8 5.6-5.7 8.4-8.5 21-21 21-48.2 0-69.2l-27.3-27.3c-3.1-3.1-6.3-6.3-9.3-9.5-6-6.2-12.3-12.6-18.8-18.6-9.7-9.6-21.3-14.7-33.5-14.7s-24 5.1-34 14.7l-.2.2-34 34.3c-12.8 12.8-20.1 28.4-21.7 46.5-2.4 29.2 6.2 56.4 12.8 74.2 16.2 43.7 40.4 84.2 76.5 127.6 43.8 52.3 96.5 93.6 156.7 122.7 23 10.9 53.7 23.8 88 26 2.1.1 4.3.2 6.3.2 23.1 0 42.5-8.3 57.7-24.8.1-.2.3-.3.4-.5 5.2-6.3 11.2-12 17.5-18.1 4.3-4.1 8.7-8.4 13-12.9 9.9-10.3 15.1-22.3 15.1-34.6 0-12.4-5.3-24.3-15.4-34.3l-54.9-55.1zm35.8 105.3c-.1 0-.1.1 0 0-3.9 4.2-7.9 8-12.2 12.2-6.5 6.2-13.1 12.7-19.3 20-10.1 10.8-22 15.9-37.6 15.9-1.5 0-3.1 0-4.6-.1-29.7-1.9-57.3-13.5-78-23.4-56.6-27.4-106.3-66.3-147.6-115.6-34.1-41.1-56.9-79.1-72-119.9-9.3-24.9-12.7-44.3-11.2-62.6 1-11.7 5.5-21.4 13.8-29.7l34.1-34.1c4.9-4.6 10.1-7.1 15.2-7.1 6.3 0 11.4 3.8 14.6 7l.3.3c6.1 5.7 11.9 11.6 18 17.9 3.1 3.2 6.3 6.4 9.5 9.7l27.3 27.3c10.6 10.6 10.6 20.4 0 31-2.9 2.9-5.7 5.8-8.6 8.6-8.4 8.6-16.4 16.6-25.1 24.4-.2.2-.4.3-.5.5-8.6 8.6-7 17-5.2 22.7l.3.9c7.1 17.2 17.1 33.4 32.3 52.7l.1.1c27.6 34 56.7 60.5 88.8 80.8 4.1 2.6 8.3 4.7 12.3 6.7 3.6 1.8 7 3.5 9.9 5.3.4.2.8.5 1.2.7 3.4 1.7 6.6 2.5 9.9 2.5 8.3 0 13.5-5.2 15.2-6.9l34.2-34.2c3.4-3.4 8.8-7.5 15.1-7.5 6.2 0 11.3 3.9 14.4 7.3l.2.2 55.1 55.1c10.3 10.2 10.3 20.7.1 31.3zM256.056 112.706c26.2 4.4 50 16.8 69 35.8s31.3 42.8 35.8 69c1.1 6.6 6.8 11.2 13.3 11.2.8 0 1.5-.1 2.3-.2 7.4-1.2 12.3-8.2 11.1-15.6-5.4-31.7-20.4-60.6-43.3-83.5s-51.8-37.9-83.5-43.3c-7.4-1.2-14.3 3.7-15.6 11s3.5 14.4 10.9 15.6zM473.256 209.006c-8.9-52.2-33.5-99.7-71.3-137.5s-85.3-62.4-137.5-71.3c-7.3-1.3-14.2 3.7-15.5 11-1.2 7.4 3.7 14.3 11.1 15.6 46.6 7.9 89.1 30 122.9 63.7 33.8 33.8 55.8 76.3 63.7 122.9 1.1 6.6 6.8 11.2 13.3 11.2.8 0 1.5-.1 2.3-.2 7.3-1.1 12.3-8.1 11-15.4z"
                            opacity="1"
                            data-original="#000000"
                            class=""
                          ></path>
                        </g>
                      </svg>
                    </CIcon>
                  </CLeft>
                  <CRight>
                    <div className="sub-head">Telephone Number</div>
                    <div className="sub-point">+91 89712 69298</div>
                  </CRight>
                </Cbox>
                <FollowBox>
                  <div className="follow-sub-head">Follow our social media</div>
                  <div className="follow-icons">
                    <div className="follow-icon">
                      <i class="fa-brands fa-facebook-f"></i>
                    </div>
                    <div className="follow-icon">
                      <i class="fa-brands fa-instagram"></i>
                    </div>
                    <div className="follow-icon">
                      <i class="fa-brands fa-x-twitter"></i>
                    </div>
                    <div className="follow-icon">
                      <i class="fa-brands fa-youtube"></i>
                    </div>
                    <div className="follow-icon">
                      <i class="fa-brands fa-linkedin-in"></i>
                    </div>
                  </div>
                </FollowBox>
              </Cboxes>
            </ContactCont>
          </ContactLeft>
          <ContactRight>
            <ContactCont>
              <CsubHead>Send Us A Message</CsubHead>
              <CsubDes>Get in touch with us today.</CsubDes>
              <FormContainer>
                <Form>
                  <InputCont>
                    <label>Full Name:</label>
                    <Input1 type="text" />
                  </InputCont>
                  <InputCont>
                    <label>Mobile Number:</label>
                    <Input1
                      id="mobile"
                      type="text"
                      onInput={handleInputChange}
                    />
                  </InputCont>
                  <InputCont>
                    <label>Job-title</label>
                    <Input1 type="text" />
                  </InputCont>
                  <InputCont>
                    <label>Organization:</label>
                    <Input1 type="text" />
                  </InputCont>
                  <InputCont1>
                    <label>Email-Id:</label>
                    <Input2 type="email" />
                  </InputCont1>
                  <InputCont1>
                    <label>Select Your Interest:</label>
                    <Selection1
                      name="interest"
                      class="form-control"
                      required="required"
                    >
                      <option
                        style={{ display: "none" }}
                        className="blank_option"
                      ></option>
                      <option value="exhibitor">Exhibitor</option>
                      <option value="speaking">Speaker</option>
                      <option value="delegate">Delegate</option>
                      <option class="sponsor">Sponsor</option>
                      <option value="media-partner">Media Partner</option>
                      <option value="supporting-partner">
                        Supporting Partner
                      </option>
                      <option value="others">Others</option>
                    </Selection1>
                  </InputCont1>
                  <InputCont1>
                  <label>Write your message</label>
                    <Textarea rows="8"  />
                  </InputCont1>
                  <Button type="submit">Submit</Button>
                </Form>
              </FormContainer>
            </ContactCont>
          </ContactRight>
        </ContactContainer>
      </ContactSection>
      <MapComponent>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7775.732031792539!2d77.63249804161197!3d12.98042029934283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a31f60278b%3A0x7378c4bc59787659!2sTraiCon%20Events%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1732599518980!5m2!1sen!2sin"
          width={"100%"}
          height={"100%"}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </MapComponent>
    </>
  );
};

export default ContactUs;
