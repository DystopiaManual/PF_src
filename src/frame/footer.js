import React from 'react'
import './footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons';

function footer() {
  return (
    <footer>
      <div className='footer-contents'>
        <div className='footer-content1'>
          <img src='img/footer_me.gif' alt='내사진'/>
        </div>
        <div className='footer-content2'>
          <p>
            <span className='footer-hello'>HELLO<span className='pink-dot'>.</span></span><br/>
            <span className='footer-intro'>신입 개발자 정욱채입니다<span className='pink-dot'>.</span></span><br/><br/>
            인터랙티브한 화면을 구성하는 것을 좋아하고,<br/>
            꼼꼼하며, 커뮤니케이션이 원활한 개발자가 되도록<br/>
            노력하겠습니다.
          </p>
        </div>
        <div className='footer-content3'>
          <dl className='call-me'>
              <dt>Where I live</dt>
              <dd>Imun-ro, Dongdaemun-gu, Seoul, Republic of Korea</dd>
              <dt>Call me up!</dt>
              <dd>+82 &#40;0&#41;10 2504 2452</dd>
              <dt>Or do you want an email?</dt>
              <dd>nsw99@hanmail.net</dd>
          </dl>
        </div>
      </div>
      <div className='real-footer'>
        <div className='copyright'>
          Copyright 2023. Web Front-end developer Portfolio by UK-CHAE <span><FontAwesomeIcon icon={faFaceSmile} /></span>
        </div>
      </div>
    </footer>
  )
}

export default footer