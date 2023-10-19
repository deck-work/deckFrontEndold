import React, { useState } from "react";
import "./landingPage.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LandingPage = () => {
  const [email, setEmail] = useState("");

  const handler = (event) => {
    if (event.code === "Enter") {
      const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
      // console.log(event);
      // C:\Users\ankur\Downloads\newdeck$oct\src\component
      if (emailRegex.test(email)) {

           // Email is valid
           setEmail("");
           toast.success("Thank you for Contacting us!", {
             position: "top-center",
             autoClose: 1000,
             hideProgressBar: false,
             closeOnClick: true,
             pauseOnHover: true,
             draggable: true,
             progress: undefined,
             theme: "colored",
           });
           
         } else {
           // Email is invalid
           toast.error("Please enter a valid email address.", {
             position: "top-center",
             autoClose: 1000,
             hideProgressBar: false,
             closeOnClick: true,
             pauseOnHover: true,
             draggable: true,
             progress: undefined,
             theme: "colored ",
           });
         }
       } else {
         // setPass('qwerty');
       }
      //  console.log("Email entered:", email)
      }

      

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="landing">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="landing-container">
        <div className="deck-logo">
          <h1>Deck</h1>
        </div>
        <div className="deck-heading">
          <p>We're building a solution for tomorrow.</p>
          <p>In stealth.</p>
        </div>
        <div className="deck-email">
          <div>
            <p>
              Enter Your Email to subscribe
              <br /> to updates and get early access.
            </p>
          </div>
          <div>
            <input
              type="email"
              placeholder="you@email.com"
              value={email}
              onChange={handleEmailChange}
              onKeyDown={handler}
              required
            />
          </div>
        </div>
        <div className="deck-mail">
          <p>deck.work</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
