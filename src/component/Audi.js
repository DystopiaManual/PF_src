import React from 'react'
import './Details.css'
import './Audi.css'
import { useNavigate } from 'react-router-dom';

function Audi(props) {
    let navigate = useNavigate();
  return (
    <>
        <article className='details-wrap'>
            <div className='goback-btn'>
                <button onClick={ ()=>{
                    navigate(-1);
                }}><img src='img/back.png' alt='뒤로가기버튼' /></button>
            </div>
            <div className='audi-wrap'>
                <h2>AUDI<span className='blue-dot'>.</span></h2>
                <div className='audi-flex'>
                    <div className='audi-imgbox'>
                        <img src="img/audi_clone_mock.gif" alt="포트폴리오이미지"/>
                    </div>
                    <div className='dl-wrap'>
                        <dl>
                            <dt>TIME<span className='blue-dot'>.</span></dt>
                            <dd>8 Days</dd>
                            <dt>Skills<span className='blue-dot'>.</span></dt>
                            <dd>CSS,JS + jQuery</dd>
                            <dt>Link<span className='blue-dot'>.</span></dt>
                            <dd><a href='https://nsw99.cafe24.com/group_works_audi/index.html'>https://Audi.html</a></dd>
                            <dt>Description<span className='blue-dot'>.</span></dt>
                            <dd>6명이 조를 이루어 작업하였습니다. <br/>조장으로서 업무 분배 및 조율을 했으며, 제 작업영역은 메인페이지와 Footer입니다.</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </article>
    </>
  )
}

export default Audi