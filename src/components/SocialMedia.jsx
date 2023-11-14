import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://twitter.com/r_agbahungba"><BsTwitter /></a>
      </div>
      <div>
        <a href="https://www.facebook.com/semevo.ricardo"><FaFacebook /></a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/join-digital-process/"><FaLinkedin /></a>
      </div>
      <div>
        <a href="https://www.instagram.com/iam_georgeo_agbahungba/"><BsInstagram /></a>
      </div>
    </div>
  )
}

export default SocialMedia;
