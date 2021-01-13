import React from "react";
import emailjs from "emailjs-com";
import "./ContactUs.css";
import "../HeroSection/HeroSection.css";
import Checkbox from "../Checkbox/Checkbox";
import "../Button/Button.css";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("GMAIL", "TEMPLATE1", e.target, "user_9YWJ4QhWhzENaOQHisOv5")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <>
      <div className="home__hero-section">
        <div className="container">
          <div
            className="row home__hero-row"
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div className="col">
              <form className="contact-form" onSubmit={sendEmail}>
                <h2>CONTACT US</h2>
                <label>
                  Name
                  <input
                    type="text"
                    placeholder="Write your name here.."
                    name="user_name"
                    required
                  ></input>
                </label>
                <label>
                  Email
                  <input
                    type="email"
                    placeholder="Let us know how to contact you back.."
                    name="user_email"
                    required
                  ></input>
                </label>
                <label>
                  Phone Number
                  <input
                    type="number"
                    placeholder="Write your phone number here.."
                    name="contact_number"
                    required
                  ></input>
                </label>
                <label>
                  Comments
                  <textarea
                    placeholder="What would you like to tell us.."
                    name="message"
                  ></textarea>
                </label>

                <label>Choose your plan (can be two as well)</label>
                <Checkbox />
                <div className="btn__box">
                  <button className="btn btn--wide yellow" type="submit">
                    Send
                  </button>
                </div>
              </form>
            </div>
            <div className="col">
              <div className="home__hero-img-wrapper">
                <img
                  src="https://raw.githubusercontent.com/edgarrincon/standards/dec24aa33ada14382e9dd16d2a2dd45e68c06da0/src/images/mail.svg"
                  alt="email"
                  className="home__hero-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
