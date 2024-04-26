import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
//import styled from "styled-components";

// npm i @emailjs/browser


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        "service_o27boeg",
        "template_lipff7r",
        form.current,
        "PdwUlGHVuo-u2XTpM"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="img2" >
      <form ref={form} onSubmit={sendEmail}  >
        <label>Name</label>
        <input type="text" name="user_name" placeholder="your name" />
        <label>Email</label>
        <input type="email" name="user_email" placeholder="our mail" />
        <i>sai8989b@gmail.com</i>
        <label>Message</label>
        <textarea name="message" placeholder="send description with your mail"/>
        <input type="submit" value="Send" class="button2"  />
        
      </form> 
    </div>
  );
};

export default Contact;