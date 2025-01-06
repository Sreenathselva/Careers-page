import React from "react";
import styled from "styled-components";
import { ContactPatch } from "../components/contactUs";
import Gallery from "../components/gaLlery";
import team from "../images/team.webp";

// Styled Components

const CareersContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  background-color: #040f16;
  overflow: hidden;
`;
const CareerTop = styled.div`
  position: relative;
  width: 100%;
  height: 30vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #000;

  .career-patch {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
    background-color: #00000086;
  }
`;
const Title = styled.h1`
  font-size: 4vw;
  text-align: center;
  margin-bottom: 1.5rem;
  font-family: "montserrat";
  color: #fff;
  z-index: 3;
`;
export const Direct = styled.ul`
  width: auto;
  height: 2vw;
  font-size: 1vw;
  color: #fff;
  display: flex;
  list-style-type: none;
  gap: 1vw;
  margin: 0;
  padding: 0;
  font-family: "source sans 3";
  z-index: 1;

  li {
    margin: 0;
    cursor: pointer;
  }
  .li-active {
    color: #2f9cda;
  }
`;
const CareerCont = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .career-topic {
    display: flex;
    padding: 2vw 0;
  }
  .car-img {
    width: 100%;
    height: 30vw;
    background: url(${team});
    background-size: cover;
    background-position: 0 -10vw;
    padding: 2vw 0;
    margin: 2vw 0 4vw;
    border-radius: 2vw;
  }
`;
const CareerHead = styled.h2`
  width: 50%;
  font-size: ${(props) => props.fontSize || "3vw"};
  color: ${(props) => props.color || "#fff"};
  line-height: 3.2vw;
  margin: 0;

  span {
    color: #2f9cda;
  }
`;
const Description = styled.p`
  width: 50%;
  font-size: 1.1rem;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  color: #fff;
  font-family: "source sans 3";
`;
const JobHead = styled.h2`
  font-size: 2.5vw;
  color: #fff;
  font-family: "montserrat";
  font-weight: 900;
`;
const JobList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  padding: 2vw 0;
`;

const JobCard = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 2vw;
  width: 30vw;
  text-align: start;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  .job-top {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 0 0 0.5vw 0;
  }
  h3 {
    margin-bottom: 0.75rem;
    color: #333;
    font-family: "montserrat";
    margin: 0;
  }

  p {
    margin-bottom: 1rem;
    color: #555;
    font-family: "source sans 3";
    margin: 0;
  }
  .job-time i {
    margin: 0 3px 0 0;
  }
  .job-location i {
    margin: 0 3px 0 0;
  }
  .job-time {
    font-size: 1vw;
    padding: 0.5vw 0;
  }
  .job-des {
    line-height: 1.2vw;
    padding: 0.5vw 0;
  }
  .job-location {
    padding: 0vw 0 0.5vw;
  }
  .arrow {
    position: absolute;
    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #333;
    padding: 0.5vw;
    border-radius: 5vw;
    rotate: -45deg;
    right: 0;
    top: 0.75vw;
  }
  .arrow i {
    font-size: 1vw;
    color: #fff;
  }
  button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;
const FormCont = styled.div`
  width: 66vw;
  padding: 2vw;
  border-radius: 0.5vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  margin: 0 0 2vw 0;
`;
const CareerForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
  padding: 20px;
  border-radius: 8px;
  background-color: #f9f9f9;

  form {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2vw;
  }
  .fileUpload {
    width: 20vw;
    font-size: 1vw;
    font-family: 'montserrat';
    cursor: pointer;
  }
  .input-cont{
    display: flex;
    flex-direction: column;
    width: 45%;
    padding: 0 10px;
    color: #000;
  }
  .input-cont input{
    cursor: pointer;
  }
  .upload-btn{
    width: 10vw;
    height: 1.5vw;
  }
`;

const FormHead = styled.h2`
  text-align: start;
  margin-bottom: 20px;
  color: #2f9cda;
  font-family: 'montserrat';
  font-weight: 700;
`;

const InputField = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  width: 45%;
  border: none;
  border-bottom: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  margin: 0;
`;

const TextArea = styled.textarea`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

const SubmitButton = styled.div`
  color: white;
  width: 100%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: start;
  border-radius: 4px;
  font-size: 16px;

  button{
    width: 12vw;
    height: 2.5vw;
    background-color: #2f9cda;
    border-radius: 0.5vw;
    border: none;
    color: #fff;
    cursor: pointer;
  }
  button:hover{
    background-color: #2489c2;
  }
`;

const GalleryContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: auto;
  background-color: #000;
  padding: 4vw 0;

  .gallery-head{
    font-size: 3.4vw;
    font-family: 'montserrat';
    font-weight: 900;
    color: #fff;
  }
`;

// Sample job data
const jobs = [
  {
    id: 1,
    title: "Sponsorship Sales",
    time: "Full time",
    location: "Bangalore - Karnataka",
    description:
      "Play a critical role in driving revenue by securing sponsorships for our events, programs, and initiatives.",
  },
  {
    id: 2,
    title: "Delegate Sales",
    time: "Full time",
    location: "Bangalore - Karnataka",
    description:
      "Responsible for driving attendance and participation in our events, conferences, and summits by engaging with potential delegates.",
  },
  {
    id: 3,
    title: "Digital Marketing Executive",
    time: "Full time",
    location: "Bangalore - Karnataka",
    description:
      "Responsible for planning, implementing, and monitoring digital marketing campaigns across various online platforms.",
  },
  {
    id: 3,
    title: "Digital Marketing Executive",
    time: "Full time",
    location: "Bangalore - Karnataka",
    description:
      "Responsible for planning, implementing, and monitoring digital marketing campaigns across various online platforms.",
  },
];

const Careers = () => {
  return (
    <>
      <CareersContainer>
        <CareerTop>
          <ContactPatch />
          <Title>CAREER</Title>
          <Direct>
            <li>HOME</li> / <li className="li-active">CAREER</li>
          </Direct>
          <div className="career-patch"></div>
        </CareerTop>
        <CareerCont>
          <div className="career-topic">
            <CareerHead>
              WORK WITH <span> TRAICON</span> <br /> BE A <span> TRAI'TAN</span>
            </CareerHead>
            <Description>
              We spend a large part of our lives at work, so it’s imperative to
              have a job that is inspiring from within, fun to be turning it
              light, and giving a sense of accomplishment beyond the financial
              returns it stands for.
            </Description>
          </div>
          <div className="car-img"></div>
          <JobHead>CURRENTLY OPEN POSITIONS</JobHead>
          <JobList>
            {jobs.map((job) => (
              <JobCard key={job.id}>
                <div className="job-top">
                  <h3>{job.title}</h3>
                  <p className="job-time">
                    <i class="fa-solid fa-briefcase"></i> {job.time}
                  </p>
                  <div className="arrow">
                    <i class="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
                <p className="job-des">{job.description}</p>
                <p className="job-location">
                  <i class="fa-solid fa-location-dot"></i> {job.location}
                </p>
              </JobCard>
            ))}
          </JobList>
        </CareerCont>
        <FormCont>
          <CareerForm>
            <FormHead>ABOUT YOU</FormHead>
            <form action="">
              <InputField
                type="text"
                placeholder="First Name"
                name="firstName"
                required
              />
              
              <InputField
                type="tel"
                placeholder="Phone Number"
                name="phone"
                required
              />
              <InputField
                type="email"
                placeholder="Email ID"
                name="email"
                required
              />
              <InputField
                type="text"
                placeholder="Current Position"
                name="currentPosition"
              />
              <InputField
                type="text"
                placeholder="Current Company"
                name="currentCompany"
              />
               <InputField
                type="text"
                placeholder="Your Place"
                name="currentCompany"
              />
              <InputField type="text" placeholder="Job Role" name="jobRole" />
              <div className="input-cont">
                <label className="fileUpload" htmlFor="resumeUpload">
                  Attach Your Resume
                </label>
                <input
                  type="file"
                  name="resumeUpload"
                  id="resumeUpload"
                  accept=".pdf,.doc,.docx"
                  required
                />
               
              </div>
              <SubmitButton>
                <button type="submit">SUBMIT</button>
              </SubmitButton>
            </form>
          </CareerForm>
        </FormCont>
      </CareersContainer>
      <GalleryContainer>
        <div className="gallery-head">GALLERY</div>
        <Gallery />
      </GalleryContainer>
    </>
  );
};

export default Careers;
