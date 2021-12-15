import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/js/bootstrap.bundle'
import './index.scss';
import './scss/app.scss';
import './scss/_variables.scss';

class Page extends React.Component {
    render() {
        return (
            <>
                <div className='container p-0'>
                    {/* MENU */}
                    <div className='menu'>
                        <div className='field'>
                            <img className='logo' src="./img/icon0.png" alt="logo" />
                            <div className='menu-field w-75 menu-list'>
                                <div className='s-text'>HOME</div>
                                <div className='s-text'>INSURANCE</div>
                                <div className='s-text'>SERVICES</div>
                                <div className='s-text'>BLOG</div>
                                <div className='s-text'>ABOUT</div>
                                <div className='s-text'>CONTACT</div>
                                <button className='btn'>GET A QUOTE</button>
                            </div>
                        </div>
                    </div>
                    {/* title大圖&文字輪播圖 */}
                    {/* <div className='title-bg title'>
                        <h1 className='text-light fw-bold w-50'>INSURANCE COVERAGE TO MEET YOUR NEEDS</h1>
                        <h5 className='text-light'>YOU WILL LOVE OUR SERVICES</h5>
                    </div> */}
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className='title-bg title'>
                                    <h1 className='text-light fw-bold w-50'>INSURANCE COVERAGE TO MEET YOUR NEEDS</h1>
                                    <h5 className='text-light'>YOU WILL LOVE OUR SERVICES</h5>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className='title-bg2 title'>
                                    <h1 className='text-light fw-bold w-50'>SMALL BUSINESS INSURANCE AGENCY</h1>
                                    <h5 className='text-light'>AN INSURANCE COMPANY</h5>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                    {/* 標題&三大塊模塊 */}
                    <div>
                        <p className='s-headerm s-header'>PRODUCTS & SERVICES</p>
                        <p className='header'>INSURANCE COVERAGE</p>
                        <div className='divider mx-auto'></div>
                    </div>
                    <div className='blocks'>
                        <div className='block'>
                            <img className='w-100' src="./img/img0.jpg" alt="img0" />
                            <p>AUTO INSURANCE</p>
                            <p className='text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                            <button className='btn'>LEARN MORE</button>
                        </div>
                        <div className='block'>
                            <img className='w-100' src="./img/img0.jpg" alt="img0" />
                            <p>AUTO INSURANCE</p>
                            <p className='text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                            <button className='btn'>LEARN MORE</button>
                        </div>
                        <div className='block'>
                            <img className='w-100' src="./img/img0.jpg" alt="img0" />
                            <p>AUTO INSURANCE</p>
                            <p className='text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                            <button className='btn'>LEARN MORE</button>
                        </div>
                    </div>
                    {/* 中間一個大圖加三個敘述 */}
                    <div className='w-75 mx-auto'>
                        <p className='fs-4 text-start s-headerm'>WE ARE TRUSTED AGENCY COMPANY</p>
                        <img className='photo' src="./img/img2.jpg" alt="img2" />
                        <div className='blocks'>
                            <p className='intro in_field text-muted'>aaaa</p>
                            <p className='intro in_field text-muted'>bbbb</p>
                            <p className='intro in_field text-muted'>cccc</p>
                        </div>
                    </div>
                    {/* 左圖加右文字 */}
                    <div className='field'>
                        <img className='photo in_field' src="./img/img1.jpg" alt="img1" />
                        <div className='in_field text-start'>
                            <p className='s-header'>OUTSTANDING SERVICES</p>
                            <p className='header'>WHY CHOOSE US</p>
                            <div className='divider'></div>
                            <p className='s-text text-muted'>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                        </div>
                    </div>
                    {/* 右圖加左文字 */}
                    <div className='field'>
                        <div className='in_field text-end'>
                            <p className='s-header'>OUTSTANDING SERVICES</p>
                            <p className='header'>WHY CHOOSE US</p>
                            <div className='divider'></div>
                            <p className='s-text text-muted'>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                        </div>
                        <img className='photo in_field' src="./img/img1.jpg" alt="img1" />
                    </div>
                    {/* 標題加四個ICON與文字 */}
                    <div>
                        <p className='s-header mt-5'>OUTSTANDING SERVICES</p>
                        <p className='header'>WHY CHOOSE US</p>
                        <div className='divider'></div>
                        <div className='field mt-5 mb-5'>
                            <div className='in_field'>
                                <img className='w-50' src="./img/icon0.png" alt="icon" />
                                <p className='s-text text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nobis?</p>
                            </div>
                            <div className='in_field'>
                                <img className='w-50' src="./img/icon0.png" alt="icon" />
                                <p className='s-text text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nobis?</p>
                            </div>
                            <div className='in_field'>
                                <img className='w-50' src="./img/icon0.png" alt="icon" />
                                <p className='s-text text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nobis?</p>
                            </div>
                            <div className='in_field'>
                                <img className='w-50' src="./img/icon0.png" alt="icon" />
                                <p className='s-text text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nobis?</p>
                            </div>
                        </div>
                    </div>
                    {/* 左圖右文字 */}
                    <div className='field'>
                        <img className='photo in_field' src="./img/img1.jpg" alt="img1" />
                        <div className='in_field text-start'>
                            <p className='fw-bold fs-5'>THOUSANDS OF HOUSES DAMAGE EACH YEAR</p>
                            <div className='divider'></div>
                            <p className='s-text text-muted'>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                            <button className='btn2'>Insured Yours Now</button>
                        </div>
                    </div>
                    {/* 兩個人的介紹 */}
                    <div className='bg mt-5 pb-5'>
                        <p className='fw-bold fs-5 pt-5'>OUR FOUNDERS</p>
                        <div className='divider'></div>
                        <div className='field'>
                            <div>
                                <img className='w-50 rounded-circle in_field' src="./img/person1.jpg" alt="icon" />
                                <p className='fw-bold fs-5'>Alex Peters</p>
                                <p>CEO, Co-Founder</p>
                                <p className='s-text text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                            <div>
                                <img className='w-50 rounded-circle in_field' src="./img/person1.jpg" alt="icon" />
                                <p className='fw-bold fs-5'>Shane Cripton</p>
                                <p>President, Co-Founder</p>
                                <p className='s-text text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                    {/* 人的敘述輪播圖(尚未完成) */}
                    {/* <div className='mb-5 person-change'>
                        <p className='fw-bold fs-5 pt-5'>TESTIMONIES</p>
                        <div className='divider'></div>
                        <div className='w-50 mx-auto'>
                            <img className='w-50 rounded-circle' src="./img/person1.jpg" alt="icon" />
                            <p className='fw-bold fs-5 mt-3'>Shane Cripton</p>
                            <p>President, Co-Founder</p>
                            <p className='s-text text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                    </div> */}
                    <p className='fw-bold fs-5 pt-5'>TESTIMONIES</p>
                    <div className='divider'></div>
                    <div id="carouselExampleIndicators2" className="carousel slide arrow-style" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                        {/* <div> */}
                            <div data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></div>
                            <div data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="1" aria-label="Slide 2"></div>
                            {/* <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="0" className="active change-btn" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="1" className='change-btn' aria-label="Slide 2"></button> */}
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className='w-50 mx-auto'>
                                    <img className='w-50 rounded-circle mb-4 pt-5' src="./img/person1.jpg" alt="icon" />
                                    <p className='fw-bold fs-5 mt-3'>Shane Cripton</p>
                                    <p>President, Co-Founder</p>
                                    <p className='s-text text-muted mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className='w-50 mx-auto'>
                                    <img className='w-50 rounded-circle mb-4 pt-5' src="./img/person2.jpg" alt="icon" />
                                    <p className='fw-bold fs-5 mt-3'>Shane Cripton</p>
                                    <p>President, Co-Founder</p>
                                    <p className='s-text text-muted mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>


                    {/* 黃黃塊聯絡我們 */}
                    <div className='bg-orange field'>
                        <p className='text-light fs-5 mt-3 mb-3'>SMALL BUSINESS INSURANCE COMPANY</p>
                        <button className='btn3'>CONTACT US</button>
                    </div>
                    {/* 最底下黑色塊 */}
                    <div className='bg-dark'>
                        <div className='foot-field'>
                            <div className='text-light in_field'>
                                <p>ABOUT</p>
                                <p className='s-text text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <button className='btn'>Read More</button>
                            </div>
                            <div className='text-light in_field'>
                                <p>QUICK MENU</p>
                                <p className='s-text text-muted'>Home</p>
                                <p className='s-text text-muted'>About</p>
                                <p className='s-text text-muted'>Insurance</p>
                                <p className='s-text text-muted'>Blog</p>
                                <p className='s-text text-muted'>Contacts</p>
                                <p className='s-text text-muted'>Privacy</p>
                            </div>
                            <div className='text-light in_field'>
                                <p>INSURANCE</p>
                                <p className='s-text text-muted'>Home Insurance</p>
                                <p className='s-text text-muted'>Atro Insurance</p>
                                <p className='s-text text-muted'>Travel Insurance</p>
                                <p className='s-text text-muted'>Business Insurance</p>
                            </div>
                            <div className='text-light in_field'>
                                <p>SOCIAL ICONS</p>
                                <img className='s-icon' src="./img/icon0.png" alt="icon" />
                                <img className='s-icon' src="./img/icon0.png" alt="icon" />
                                <img className='s-icon' src="./img/icon0.png" alt="icon" />
                                <img className='s-icon' src="./img/icon0.png" alt="icon" />
                            </div>
                        </div>
                        <div className='text-light pb-5'>Copyright © 2021 All Rights Reserved | This template is made by XXXXXXXX</div>
                    </div>
                    

                </div>
            </>
        )
    }
}


ReactDOM.render(
    <Page />,
    document.getElementById('root')
);