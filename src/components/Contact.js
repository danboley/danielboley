import React from 'react'
import { SiLinkedin, SiGithub } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";

function Contact() {
  return (
    <div>
      <h1>Contact Info</h1>
      <h3>Feel free to get connect with me or get in touch</h3>
      <SiLinkedin />
      <h4>LinkedIn</h4>
      <MdOutlineEmail />
      <h4>Email</h4>
      <SiGithub />
      <h4>GitHub</h4>
    </div>
  )
}

export default Contact