import React from 'react';
import { faAddressCard, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter, faSquareFacebook, faSquareInstagram, faSquareGithub, faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactPage = () => (
  <div className="text-white p-4 flex flex-col items-center gap-4">
    <h2 className="font-bold text-2xl text-center">
      Contact Information
      {' '}
      <FontAwesomeIcon
        id="mobileMenu"
        icon={faAddressCard}
      />
    </h2>
    <div className="max-w-3xl flex flex-col items-center gap-4">
      <p className="">
        Do you have any questions or you want to say Hello!?
        <br />
        Please reach out to me at;
      </p>
      <ul>
        <li>
          <span className="font-black">Email: </span>
          <span className="">praisesmusa@gmail.com</span>
        </li>
        <li>
          <span className="font-black">Phone No.: </span>
          <span className="">+234(0)808-585-2828</span>
        </li>
        <li>
          <span className="font-black">Address: </span>
          <span className="">No. A045 Igabi, Kaduna State, Nigeria</span>
        </li>
      </ul>
      <div className="social-card flex flex-wrap justify-center py-4 gap-2 ">
        <a
          className="px-2 py-1 flex gap-1 items-center text-[1rem] font-bold bg-black hover:scale-110"
          href="https://github.com/PraisesPJMT"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            className="social-icon github"
            icon={faSquareGithub}
          />
          <span>GitHub</span>
        </a>
        <a
          className="px-2 py-1 flex gap-1 items-center text-[1rem] font-bold bg-[#de5246] hover:scale-110"
          href="mailto:praisesmusa@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            className="email"
            icon={faEnvelope}
          />
          <span>Email</span>
        </a>
        <a
          className="px-2 py-1 flex gap-1 items-center text-[1rem] font-bold bg-[#0e76a8] hover:scale-110"
          href="https://www.linkedin.com/in/praises-tula-9233aa76"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            className="linkedin"
            icon={faLinkedin}
          />
          <span>LinkedIn</span>
        </a>
        <a
          className="px-2 py-1 flex gap-1 items-center text-[1rem] font-bold bg-[#1da1f2] hover:scale-110"
          href="https://twitter.com/PraisesPJMT"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            className="social-icon twitter"
            icon={faTwitter}
          />
          <span>Twitter</span>
        </a>
        <a
          className="px-2 py-1 flex gap-1 items-center text-[1rem] font-bold bg-[#3b5998] hover:scale-110"
          href="https://web.facebook.com/praises.musa"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            className="social-icon facebook"
            icon={faSquareFacebook}
          />
          <span>Facebook</span>
        </a>
        <a
          className="px-2 py-1 flex gap-1 items-center text-[1rem] font-bold bg-[#833ab4] hover:scale-110"
          href="https://www.instagram.com/praisespjmt/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            className="social-icon instagram"
            icon={faSquareInstagram}
          />
          <span>Instagram</span>
        </a>
      </div>
    </div>
  </div>
);

export default ContactPage;
