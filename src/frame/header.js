import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

function Header() {
  return (
    <div className="header">
        <h1>
          <FontAwesomeIcon icon={faRobot} className="farobot"/>
        </h1>
        <nav>
          <ul className="gnb">
            <li>
              <a href="https://www.instagram.com/yby_b/" alt="인스타링크">
                <img src="img/instagram.png" alt="인스타그램로고" />
              </a>
            </li>
            <li>
              <a href="https://open.kakao.com/o/sycH7SA" alt="카카오톡링크">
                <img src="img/kakao-talk.png" alt="인스타그램로고" />
              </a>
            </li>
            <li>
              <a href="https://github.com/DystopiaManual" alt="깃헙링크">
                <img src="img/github.png" alt="인스타그램로고" />
              </a>
            </li>
            {/* <Link to='/'><li>처음으로</li></Link>
            <Link to='/intro'><li>소개</li></Link>
            <Link to='/intro'><li>문의하기</li></Link> */}
          </ul>
        </nav>
    </div>
  );
}

export default Header;
