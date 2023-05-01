import { useEffect, useState } from "react";
import $ from 'jquery';
import './main.css';
import { Link } from "react-router-dom";


function Main() {
  /* Parallax */
  const [parallax, setParallax] = useState(0);
  function onScroll() {
    const wrap = document.querySelector('#rellax-wrap');
    const scroll = window.scrollY;
    // const targetwhere = wrap.offsetTop;
    const targetStart = wrap.getBoundingClientRect().top;
    const focusLine = targetStart-100;
    const targetHeight = wrap.offsetHeight;
    // const parallaxStart = (wrap.getBoundingClientRect().top) - (targetHeight/2);
    const parallaxStart = (focusLine) - (targetHeight/2);
    // if (parallaxStart>=targetHeight || parallaxStart<=targetHeight) {
    //   setParallax(parallaxStart);
    // }
    setParallax(parallaxStart);
    
    // console.log('현재스크롤값 : '+scroll)
    // console.log('처음부터목표까지의거리 : '+targetwhere)
    // console.log('목표의 높이값 : '+targetHeight)
    // console.log('목표의시작부분 : '+targetStart)
    // console.log('트랜스폼시작포인트 : '+parallaxStart)
    
  }


  useEffect(()=>{
    /* 페이지 로드 시 */
    // $('.depth1>div').on("click",function(){
    //   const toggler = document.querySelector('.depth1>div');
    //   const togglerSibling = toggler.nextSibling;
    //   const togglerchild = togglerSibling.firstChild;
    //   toggler.onclick = function(){
    //     toggler.classList.toggle('active');
    //     togglerchild.classList.toggle('active-child');
    //   }
    // })
    $('.depth1>div').off('click').on("click",function(){
      $(this).siblings('ul').children('li').slideToggle();
      $(this).toggleClass('active');
    })
    /* 오프닝 */
    const open1 = document.querySelector('.opening1');
    const open2 = document.querySelector('.opening2');
    const open3 = document.querySelector('.opening3');
    const open4 = document.querySelector('.opening4');
    const open5 = document.querySelector('.opening5');
    open1.style.transform='translateX(0%)'
    setTimeout(()=>open2.style.transform='translateX(0%)',250)
    setTimeout(()=>open3.style.transform='translateX(0%)',500)
    setTimeout(()=>open4.style.transform='translateX(0%)',750)
    setTimeout(()=>open5.style.transform='translateX(0%)',1000)


    /*----------------탑버튼---------------- */
    const topButton = document.querySelector('.topbtn');
    topButton.addEventListener("click",function(e){
      e.preventDefault();
      window.scrollTo({top:0,left:0, behavior:'smooth'});
    })

    function topbtnDisplay(){
      const topbtn = document.querySelector('.topbtn'); 
      const firstDisplay = document.querySelector('.sec1');
      const firstDisplayHeight = firstDisplay.offsetHeight;
      const target = firstDisplayHeight/2;
      const scroll = window.scrollY; 
      if (scroll >= target) {
        topbtn.style.transform=`translateX(0vw)`
      }else {
        topbtn.style.transform=`translateX(20vw)`
      }
    }
    
    /*----------------------------------------------------------- */
    /* 메인페이지 카드플립 시작 */
    class CardFlipOnScroll {
      constructor(wrapper, sticky) {
        this.wrapper = wrapper
        this.sticky = sticky
        this.cards = sticky.querySelectorAll('.card')
        this.length = this.cards.length

        this.start = 0
        this.end = 0
        this.step = 0
      }

      init() {
        this.start = this.wrapper.offsetTop - 300
        this.end = this.wrapper.offsetTop + this.wrapper.offsetHeight - window.innerHeight 
        this.step = (this.end - this.start) / (this.length * 2)
      }

      animate() {
        this.cards.forEach((card, i) => {
          const s = this.start + this.step * i
          const e = s + this.step * (this.length + 1)

          if (window.scrollY <= s) {
            card.style.transform = `
              perspective(100vw)
              translateX(100vw) 
              rotateY(180deg)
            `
          } else if (window.scrollY > s && window.scrollY <= e - this.step) {
            card.style.transform = `
              perspective(100vw)
              translateX(${100 + (window.scrollY - s) / (e - s) * -100}vw)
              rotateY(180deg)
            `
          } else if (window.scrollY > e - this.step && window.scrollY <= e) {
            card.style.transform = `
              perspective(100vw)
              translateX(${100 + (window.scrollY - s) / (e - s) * -100}vw)
              rotateY(${180 + -(window.scrollY - (e - this.step)) / this.step * 180}deg)
            `
          } else if (window.scrollY > e) {
            card.style.transform = `
              perspective(100vw)
              translateX(0vw) 
              rotateY(0deg)
            `
          }
        })
      }
    }

    const mainFilpContent = document.querySelector('.main-filp-content')
    const sticky = document.querySelector('.sticky')
    const cardFlipOnScroll = new CardFlipOnScroll(mainFilpContent, sticky)
    cardFlipOnScroll.init()

    window.addEventListener('scroll', () => {
      cardFlipOnScroll.animate()
    })

    window.addEventListener('resize', () => {
      cardFlipOnScroll.init()
    })

    /* 메인페이지 카드플립 끝 */
    /*----------------------------------------------------------- */
    /* 요소가 보이면 에니메이션 작동 시작 */
    const aniObserver = new IntersectionObserver((e)=>{
      e.forEach((aniTest)=>{
        if (aniTest.isIntersecting){
          aniTest.target.style.opacity = 1;          
        } else {
          aniTest.target.style.opacity = 0;
        }
        // 얼마나 보이는지 확인
        // console.log(aniTest.intersectionRatio)
      })
    })
    const aniStart = document.querySelector('.skill-info');
    aniObserver.observe(aniStart)

    /*----------------------------------------------------------- */
    /*----------------------------------------------------------- */
     const aniObserver2 = new IntersectionObserver((e)=>{
      e.forEach((test)=>{
        if (test.isIntersecting){
          test.target.classList.add('skill-ani');
        } else {
          test.target.classList.remove('skill-ani');
        }
      })
     })
     const skillAni = document.querySelectorAll('.progress-line');
     aniObserver2.observe(skillAni[0])
     aniObserver2.observe(skillAni[1])
     aniObserver2.observe(skillAni[2])
     aniObserver2.observe(skillAni[3])
     aniObserver2.observe(skillAni[4])
     aniObserver2.observe(skillAni[5])
     aniObserver2.observe(skillAni[6])
    /* 요소가 보이면 에니메이션 작동 끝 */
    /*----------------------------------------------------------- */
    /* Parallax 효과 */
     window.addEventListener("scroll",onScroll);
     window.addEventListener("resize",onScroll)
     window.addEventListener('scroll',topbtnDisplay)
     window.addEventListener('resize',topbtnDisplay)
     return () => {
       window.removeEventListener("scroll",onScroll);
       window.removeEventListener("resize",onScroll)
       window.removeEventListener('scroll',topbtnDisplay)
       window.removeEventListener('resize',topbtnDisplay)
     }
     
     
     
  });
  return (
    <div className='main_wrap'>
      {/* 섹션 1 시작 */}
      <section className='sec1'>
        <div className='main_video_wrap'>
          {/* <video muted autoPlay loop>
            <source src='video/main_video.mp4' type="video/mp4" alt='메인비디오'/>
          </video> */}
          <div className='main_text'>
            <div className="opening1">WEB</div>
            <div className="opening2">DEVELOPER</div>
            <div className="opening3">HERE</div>
          </div>
          <div className="scroll_icon">
            <img src="img/mouse-cursor.png" alt="스크롤아이콘"/>
          </div>
        </div>
        <div className='main_sub_text'>
          <div className="opening4">성장하고 싶은</div>
          <div className="opening5">개발자 <span>정욱채</span> 입니다.</div>
        </div>
      </section>
      {/* 섹션 1 끝 */}
      {/* 섹션 2 시작 */}
      <section className='sec2'>
        <div className="main-filp-content">
          <div className="sticky">
            <div className="sticky-line"></div>
            <div className="sticky-background">
              <div className="blue-line"></div>
              <p>MY PORTFOLIO<span className="pink-dot">.</span></p>
              <div className="scroll-port">
                <img src="img/down-arrow2.png" alt="스크롤다운아이콘"/>
              </div>
            </div>
            <div className="card-frame">
              <div className="card">
                <div className="front">
                  <Link to='/Platina'>
                    <img src="img/platina_mockup-nude.gif" alt="포트폴리오이미지1"/>
                  </Link>
                </div>
                <div className="back">
                  PLATINA
                </div>
              </div>
              <div className="card">
                <div className="front">
                  <Link to='/Studio'>
                    <img src="img/studio_mac_mocku.gif" alt="포트폴리오이미지2"/>
                  </Link>
                </div>
                <div className="back">
                  STUDIO
                </div>
              </div>
              <div className="card">
                <div className="front">
                  <Link to='/Audi'>
                    <img src="img/audi_clone_mock.gif" alt="포트폴리오이미지3"/>
                  </Link>
                </div>
                <div className="back">
                  AUDI
                </div>
              </div>
              <div className="card">
                <div className="front">
                  <Link to='/Sillajen'>
                    <img src="img/mac_mockup_silla.gif" alt="포트폴리오이미지4"/>
                  </Link>
                </div>
                <div className="back">
                  SILLAJEN
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 섹션 2 끝 */}
      {/* 섹션 3 시작 */}
      <section className="sec3">
        <div className="sec3-line"></div>        
        <div className="sec3-contents">
          <div className="sec3-imgbox">
            <img src="img/me_pic.gif" alt="프로필사진"/>
          </div>
          <div className="sec3-infobox">
              <h2>HELLO<span></span><span className="pink-dot">.</span></h2>
              <p className="sec3-hello">신입 개발자 정욱채입니다<span className="pink-dot">.</span></p>
              <p>
                내가 만든 서비스를 웹을 통해 많은 사람들에게 제공할 수 있을까 라는 생각을 시작으로 웹에 대한 흥미가 생겨,<br/>
                2022년 07월부터 12월까지 국비지원 풀스택 과정을 수료 하였습니다.<br/>
                수강과정 중 모든 수업들이 재밌었지만 가장 흥미를 느낀 부분은 흔히 앞단이라고 말하는 화면을 구성하는 수업들이었습니다.<br/>
                특히 동적으로 움직이는 웹사이트에 큰 흥미를 느껴 학원이 끝나고 집에오면 온라인 강의를 통해 JS와 jQuery로 만들 수 있는 다양한 효과를 구현해보곤 했습니다.<br/>
                그 결과, 강사님께 좋은 인상을 남겨 조장으로서 조원들을 이끌어 작업할 수 있었습니다.<br/>
                계속해서 성장하여 믿고 일을 맡길 수 있는 개발자가 되는 것이 제 목표입니다.<br/>
                웹 개발은 제자리에 머물고 있다고 느끼던 제가 학습을 통해 더 나은 저로 발전할 수 있게 해준 좋은 발판이라고 생각합니다.<br/>
              </p>
              <div className="pdf-down">
                <a href="resume/정욱채_이력서.pdf" download>
                  <button>이력서 다운로드</button>
                </a>
              </div>
          </div>
        </div>
      </section>
      {/* 섹션 3 끝 */}
      {/* 섹션 4 시작 */}
      <section className="sec4">
        <div className="skill-info">
          <div className="skill-position-box">
            <h2>MY SKILLS<span className="pink-dot">.</span></h2>
            <div className="skills-bar">
              <div className="bar">
                <div className="s-info">
                  <span>HTML</span>
                </div>
                <div className="progress-line s-html skill-ani"><span/></div>
              </div>
              <div className="bar">
                <div className="s-info">
                  <span>CSS</span>
                </div>
                <div className="progress-line s-css"><span/></div>
              </div>
              <div className="bar">
                <div className="s-info">
                  <span>javaScript</span>
                </div>
                <div className="progress-line s-javascript"><span/></div>
              </div>
              <div className="bar">
                <div className="s-info">
                  <span>jQuery</span>
                </div>
                <div className="progress-line s-jquery"><span/></div>
              </div>
              <div className="bar">
                <div className="s-info">
                  <span>React.js</span>
                </div>
                <div className="progress-line s-react"><span/></div>
              </div>
              <div className="bar">
                <div className="s-info">
                  <span>JAVA</span>
                </div>
                <div className="progress-line s-java"><span/></div>
              </div>
              <div className="bar">
                <div className="s-info">
                  <span>OracleDB</span>
                </div>
                <div className="progress-line s-oracle"><span/></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 섹션 4 끝 */}
      {/* 섹션 5 시작 */}
      <section className="sec5">
        <div className="my-hobby-wrap content">
          <h1>MY FAVORITE THINGS<span className="pink-dot">.</span></h1>
        </div>
        <div id="rellax-wrap">
          <div className="paratest1"
          style={{
            transform: `translateY(${-parallax/8.3}em)`
          }}>
            <img src="img/parallax1.png" alt="취미이미지1" />
          </div>
          <div className="paratest2"
          style={{
            transform: `translateY(${-parallax/8.5}em)`
          }}>
            <img src="img/parallax2.png" alt="취미이미지1" />
          </div>
          <div className="paratest3"
          style={{
            transform: `translateY(${-parallax/30}em)`
          }}>
            <img src="img/parallax3.png" alt="취미이미지1" />
          </div>
          <div className="paratest4"
          style={{
            transform: `translateY(${-parallax/30}em)`
          }}>
            <img src="img/parallax4.png" alt="취미이미지1" />
          </div>
          <div className="paratest5"
          style={{
            transform: `translateY(${-parallax/9}em)`
          }}>
            <img src="img/parallax5.png" alt="취미이미지1" />
          </div>
          <div className="paratest6"
          style={{
            transform: `translateY(${-parallax/18}em)`
          }}>
            <img src="img/parallax6.png" alt="취미이미지1" />
          </div>
          <div className="paratest7"
          style={{
            transform: `translateY(${-parallax/11}em)`
          }}>
            <img src="img/parallax7.png" alt="취미이미지1" />
          </div>
          <div className="paratest8"
          style={{
            transform: `translateY(${-parallax/4.1}em)`
          }}>
            <img src="img/parallax8.png" alt="취미이미지1" />
          </div>
          <div className="paratest9"
          style={{
            transform: `translateY(${-parallax/13}em)`
          }}>
            <img src="img/parallax9.png" alt="취미이미지1" />
          </div>
          <div className="paratest10"
          style={{
            transform: `translateY(${-parallax/50}em)`
          }}>
            <img src="img/parallax10.png" alt="취미이미지1" />
          </div>
        </div>
      </section>
      {/* 섹션 5 끝 */}
      {/* 섹션 6 시작 */}
      <section className="sec6">
          <div className="faq-wrap">
            <h3>FAQ<span className="pink-dot">.</span></h3>
            <ul>
              <li className="depth1">
                <div className="toggle-me"><span>간단한 자기소개를 해주세요.</span><img src="img/down-arrow.png" alt="화살표아이콘"/></div>
                <ul>
                  <li className="depth2 toggle-child">
                    저는 의상을 전공했었으며 의류영업직에 오래 근무했지만,
                    현재는 웹 개발에 큰 흥미를 느껴 공부중입니다.<br/>인터랙티브한 화면을 구성하는것을 좋아하고 새로운 기술을 사용해보는것을 좋아합니다. <br/>
                  </li>
                </ul>
              </li>
              <li className="depth1">
                <div className="toggle-me"><span>지금까지의 전공과 개발은 무관한데 어떻게 시작하게 됐나요?</span><img src="img/down-arrow.png" alt="화살표아이콘"/></div>
                <ul>
                  <li className="depth2 toggle-child">
                    내 서비스를 오프라인이아닌 온라인으로 많은 사람들이 사용한다면 어떨까? 에서 시작됐습니다.<br/>
                    직장을 다니며 온라인강의로 틈틈히 공부하다 확실히 마음이 정해진 후 국비지원을 통해 웹개발교육을 수강했습니다.
                  </li>
                </ul>
              </li>
              <li className="depth1">
                <div className="toggle-me"><span>본인만의 학습 방법이 있다면?</span><img src="img/down-arrow.png" alt="화살표아이콘"/></div>
                <ul>
                  <li className="depth2 toggle-child">
                    유용하다고 생각되는 라이브러리가 있을때, 비슷하거나 똑같은 효과를 가진 코드를 직접 작성해보는 것으로 공부하곤 합니다.<br/>
                    또한 출퇴근등의 이동하는 시간동안 도움이 될만한 정보를 찾아보는 편입니다.
                  </li>
                </ul>
              </li>
              <li className="depth1">
                <div className="toggle-me"><span>일을하면서 가장 중요하게 생각하는 부분은 뭔가요?</span><img src="img/down-arrow.png" alt="화살표아이콘"/></div>
                <ul>
                  <li className="depth2 toggle-child">
                    저는 늘 하고있는 일이 가치가 있는지에 대한 의문을 가지는 편입니다.<br/>
                    오프라인 세일즈를 했을 당시에는 고객님들이 저에게 조언을 구하시고 만족스러운 구매로 이루어질때 누군가를 행복하게 할 수 있다는 것에 보람을 느꼈습니다.<br/>
                    개발자로서의 커리어를 쌓아나가 언젠가 저만의 서비스를 만들 수 있게 된다면,<br/>
                    평점 만점의 서비스를 제공하고 싶습니다.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
      </section>
      {/* 섹션 6 끝 */}
      {/* 어사이드 6 시작*/}
      <aside>
          <div className="topbtn-wrap">
            <button className="topbtn">
              <img src="img/top.png" alt="맨위로이동"></img>
            </button>
          </div>
      </aside>
      {/* 어사이드 6 끝 */}
    </div>
  )
}

export default Main