import React from 'react'
import './Details.css'
import './Studio.css'
import { useNavigate } from 'react-router-dom';

function Studio(props) {
    let navigate = useNavigate();
  return (
    <>
        <article className='details-wrap'>
            <div className='goback-btn'>
                <button onClick={ ()=>{
                    navigate(-1);
                }}><img src='img/back.png' alt='뒤로가기버튼' /></button>
            </div>
            <div className='studio-wrap'>
                <h2>PVC_STUDIO<span className='blue-dot'>.</span></h2>
                <div className='studio-flex'>
                    <div className='studio-imgbox'>
                        <img src="img/studio_mac_mocku.gif" alt="포트폴리오이미지"/>
                    </div>
                    <div className='dl-wrap'>
                        <dl>
                            <dt>TIME<span className='blue-dot'>.</span></dt>
                            <dd>2 Days</dd>
                            <dt>Skills<span className='blue-dot'>.</span></dt>
                            <dd>CSS,JS + jQuery</dd>
                            <dt>Link<span className='blue-dot'>.</span></dt>
                            <dd><a href='https://nsw99.cafe24.com/PVC_Studio/PVC_Studio.html'>https://Studio.html</a></dd>
                            <dt>Description<span className='blue-dot'>.</span></dt>
                            <dd>미디어쿼리를 활용하여 만든 반응형 웹 사이트 입니다. <br/>모바일퍼스트로 제작하였습니다.</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </article>
    </>
  )
}

export default Studio