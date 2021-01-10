import React from "react";
import emailjs from "emailjs-com";
import "./ContactUs.css";
import "../HeroSection/HeroSection.css";
import Checkbox from "../Checkbox/Checkbox";

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
                  ></input>
                </label>
                <label>
                  Email
                  <input
                    type="email"
                    placeholder="Let us know how to contact you back.."
                    name="user_email"
                  ></input>
                </label>
                <label>
                  Phone Number
                  <input
                    type="number"
                    placeholder="Write your phone number here.."
                    name="contact_number"
                  ></input>
                </label>
                <label>
                  Comments
                  <textarea
                    placeholder="What would you like to tell us.."
                    name="message"
                  ></textarea>
                </label>
                <Checkbox />

                <button className="btn--wide yellow" type="submit">
                  Send
                </button>
              </form>
            </div>
            <div className="col">
              <div className="home__hero-img-wrapper">
                <div className="home__hero-img"></div>
                <img
                  src="https://raw.githubusercontent.com/edgarrincon/standards/5533007b7c39fb4bd147c595ccf581ed5279f318/src/images/ecommerce.svg"
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
