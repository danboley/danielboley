import React from "react";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";

function Contact() {
  return (
    <div className="my-24">
      <h1>Contact Info</h1>
      <h3>Feel free to get connect with me or get in touch</h3>
      <SiLinkedin />
      <h4>
        <a href="https://www.linkedin.com/in/daniel-boley/" target="_blank">
          LinkedIn
        </a>
      </h4>
      <MdOutlineEmail />
      <h4>
        <a href="mailto:danboley1@gmail.com" target="_blank">
          Email
        </a>
      </h4>
      <SiGithub />
      <h4>
        <a href="https://github.com/danboley" target="_blank">
          GitHub
        </a>
      </h4>
    </div>
  );
}

export default Contact;
