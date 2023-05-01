import React from 'react'
import './Details.css'
import './Platina.css'
import { useNavigate } from 'react-router-dom';

function Platina(props) {
    let navigate = useNavigate();
  return (
    <>
        <article className='details-wrap'>
            <div className='goback-btn'>
                <button onClick={ ()=>{
                    navigate(-1);
                }}><img src='img/back.png' alt='뒤로가기버튼' /></button>
            </div>
            <div className='platina-wrap'>
                <h2>PLATINA<span className='blue-dot'>.</span></h2>
                <div className='platina-flex'>
                    <div className='platina-imgbox'>
                        <img src="img/platina_mockup-nude.gif" alt="포트폴리오이미지1"/>
                    </div>
                    <div className='dl-wrap'>
                        <dl>
                            <dt>TIME<span className='blue-dot'>.</span></dt>
                            <dd>2 Days</dd>
                            <dt>Skills<span className='blue-dot'>.</span></dt>
                            <dd>CSS,JS + jQuery</dd>
                            <dt>Link<span className='blue-dot'>.</span></dt>
                            <dd><a href='https://nsw99.cafe24.com/PVC_Platina_aside_fixed/mobile_iframe.html'>https://Platina.html</a></dd>
                            <dt>Description<span className='blue-dot'>.</span></dt>
                            <dd>가변형으로 작업하여 PC에서도 볼 수 있지만, 시각적으로 모바일에 중점을 두고 제작 하였습니다.</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </article>
    </>
  )
}

export default Platina