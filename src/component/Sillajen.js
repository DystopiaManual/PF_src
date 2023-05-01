import React from 'react'
import './Details.css'
import './Sillajen.css'
import { useNavigate } from 'react-router-dom';

function Sillajen(props) {
    let navigate = useNavigate();
  return (
    <>
        <article className='details-wrap'>
            <div className='goback-btn'>
                <button onClick={ ()=>{
                    navigate(-1);
                }}><img src='img/back.png' alt='뒤로가기버튼' /></button>
            </div>
            <div className='sillajen-wrap'>
                <h2>SILLAJEN<span className='blue-dot'>.</span></h2>
                <div className='sillajen-flex'>
                    <div className='sillajen-imgbox'>
                        <img src="img/mac_mockup_silla.gif" alt="포트폴리오이미지"/>
                    </div>
                    <div className='dl-wrap'>
                        <dl>
                            <dt>TIME<span className='blue-dot'>.</span></dt>
                            <dd>4 Days</dd>
                            <dt>Skills<span className='blue-dot'>.</span></dt>
                            <dd>CSS,JS + jQuery</dd>
                            <dt>Link<span className='blue-dot'>.</span></dt>
                            <dd>
                                <a href='https://nsw99.cafe24.com/Sillajen_only_Front/Sillajen_main.html'>프론트 : https://Sillajen.html</a><br/>
                                <a href='https://github.com/DystopiaManual/project_Sillajen'>CRUD 깃헙 : DystopiaManual/project_Sillajen</a>
                            </dd>
                            <dt>Description<span className='blue-dot'>.</span></dt>
                            <dd>2명이 조를 이루어 작업하였습니다.<br/>메인페이지의 GNB부분을 제외한 모든 작업을 제가 했습니다.</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </article>
    </>
  )
}

export default Sillajen