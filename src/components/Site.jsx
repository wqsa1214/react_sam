import React from 'react'

const siteText = [
    {
        text:["make","2차 포트폴리오","Kim ChangYoung"],
        title:"MOVE VILLIAN DANCE",
        code:"/",
        view:"/",
        info:["site coding","production perriod : 5day","use stack : HTML / CSS3 / SCSS / FIGMA / PHOTOSHOP"],
    },{
        text:["make","DOPAMINE","Jo Team"],
        title:"DOPAMINE Web Agency",
        code:"/",
        view:"/",
        info:["site coding","production perriod : 5day","use stack : HTML / CSS3 / SCSS / FIGMA / PHOTOSHOP"],
    },{
        text:["make","PROJECT","Kim ChangYoung"],
        title:"PROJECT ZOMBOID",
        code:"/",
        view:"/",
        info:["site coding","production perriod : 5day","use stack : HTML / CSS3 / SCSS / FIGMA / PHOTOSHOP"],
    },{
        text:["make","1차 포트폴리오","Kim ChangYoung"],
        title:"CTM",
        code:"/",
        view:"/",
        info:["site coding","production perriod : 5day","use stack : HTML / CSS3 / SCSS / FIGMA / PHOTOSHOP"],
    },{
        text:["make","리디자인","이름"],
        title:"내가 입사 지원할 회사",
        code:"/",
        view:"/",
        info:["site coding","production perriod : 5day","use stack : HTML / CSS3 / SCSS / FIGMA / PHOTOSHOP"],
    }
]

const Site = () => {
return (
    <section id='site'>
        <div className="site_inner">
            <div className="site_title">
                Site coding <em>나의 작품</em>
            </div>
            <div className="site_wrap">
                {
                    siteText.map((site,key)=>(
                        <article className={`site_item s${key+1}`} key={key}>
                        <span className='num'>{key+1}.</span>
                        <div className="text">
                            <div>{site.text[0]}</div>
                            <div>{site.text[1]}</div>
                            <div>{site.text[2]}</div>
                        </div>
                        <h3 className='title'>{site.title}</h3>
                        <div className="btn">
                            <a href={site.code}>사이트 바로가기</a>
                            <a href={site.view}>자세히 보기</a>
                        </div>
                        <div className="info">
                            <span>{site.info[0]}</span>
                            <span>{site.info[1]}</span>
                            <span>{site.info[2]}</span>
                        </div>
                    </article>
                    ))
                }

                {/* <article className='site_item s2'>
                    <span className='num'>2.</span>
                    <div className="text">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <h3 className='title'></h3>
                    <div className="btn">
                        <a href="/"></a>
                        <a href="/"></a>
                    </div>
                    <div className="info">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </article>
                <article className='site_item s3'>
                    <span className='num'>3.</span>
                    <div className="text">
                        <div></div>
                        <div></div>
                    </div>
                    <h3 className='title'></h3>
                    <div className="btn">
                        <a href="/"></a>
                        <a href="/"></a>
                    </div>
                    <div className="info">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </article>
                <article className='site_item s4'>
                    <span className='num'>4.</span>
                    <div className="text">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <h3 className='title'></h3>
                    <div className="btn">
                        <a href="/"></a>
                        <a href="/"></a>
                    </div>
                    <div className="info">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </article>
                <article className='site_item s5'>
                    <span className='num'>5.</span>
                    <div className="text">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <h3 className='title'></h3>
                    <div className="btn">
                        <a href="/"></a>
                        <a href="/"></a>
                    </div>
                    <div className="info">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </article> */}
            </div>
        </div>
    </section>
)
}

export default Site
