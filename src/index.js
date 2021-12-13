import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './scss/app.scss';
import './scss/_variables.scss';

class Page extends React.Component {
    render() {
        return (
            <>
                <div className='container p-0'>
                    <div>
                        <img src="./img/icon0.png" alt="logo" />
                    </div>
                    <div className='title-bg title'>
                        <h1 className='text-light fw-bold w-50'>INSURANCE COVERAGE TO MEET YOUR NEEDS</h1>
                        <h5 className='text-light'>YOU WILL LOVE OUR SERVICES</h5>
                    </div>
                    <p className='s-headerm s-header'>PRODUCTS & SERVICES</p>
                    <p className='header'>INSURANCE COVERAGE</p>
                    {/* 三大塊模塊 */}
                    <div className='blocks'>
                        <div className='block'>
                            <img className='img' src="./img/img0.jpg" alt="img0" />
                            <p>AUTO INSURANCE</p>
                            <p className='text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                            <button className='btn'>LEARN MORE</button>
                        </div>
                        <div className='block'>
                            <img className='img' src="./img/img0.jpg" alt="img0" />
                            <p>AUTO INSURANCE</p>
                            <p className='text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                            <button className='btn'>LEARN MORE</button>
                        </div>
                        <div className='block'>
                            <img className='img' src="./img/img0.jpg" alt="img0" />
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
                    <div className='field field_wrap '>
                        <img className='photo in_field' src="./img/img1.jpg" alt="img1" />
                        <div className='in_field'>
                            <p className='s-header'>OUTSTANDING SERVICES</p>
                            <p className='header'>WHY CHOOSE US</p>
                            <p className='s-text text-muted'>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                        </div>
                    </div>
                    {/* 右圖加左文字 */}
                    <div className='field field_wrap'>
                        <div className='in_field'>
                            <p className='s-header'>OUTSTANDING SERVICES</p>
                            <p className='header'>WHY CHOOSE US</p>
                            <p className='s-text text-muted'>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                        </div>
                        <img className='photo in_field' src="./img/img1.jpg" alt="img1" />
                    </div>
                    {/* 標題加四個ICON與文字 */}
                    <div>
                        <p className='s-header mt-5'>OUTSTANDING SERVICES</p>
                        <p className='header'>WHY CHOOSE US</p>
                        <div className='field mt-5 mb-5'>
                            <div className='in_field'>
                                <img className='icon' src="./img/icon0.png" alt="icon" />
                                <p className='s-text text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nobis?</p>
                            </div>
                            <div className='in_field'>
                                <img className='icon' src="./img/icon0.png" alt="icon" />
                                <p className='s-text text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nobis?</p>
                            </div>
                            <div className='in_field'>
                                <img className='icon' src="./img/icon0.png" alt="icon" />
                                <p className='s-text text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nobis?</p>
                            </div>
                            <div className='in_field'>
                                <img className='icon' src="./img/icon0.png" alt="icon" />
                                <p className='s-text text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nobis?</p>
                            </div>
                        </div>
                    </div>
                    {/* 左圖右文字 */}
                    <div className='field field_wrap'>
                        <img className='photo in_field' src="./img/img1.jpg" alt="img1" />
                        <div className='in_field'>
                            <p className='fw-bold fs-5 px-5 pt-5'>THOUSANDS OF HOUSES DAMAGE EACH YEAR</p>
                            <p className='s-text text-muted'>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                            <button className='btn2'>Insured Yours Now</button>
                        </div>
                    </div>
                    {/* 兩個人的介紹 */}
                    <div className='bg mt-5 pb-5'>
                        <p className='fw-bold fs-5 pt-5'>OUR FOUNDERS</p>
                        <div className='field'>
                            <div>
                                <img className='icon rounded-circle in_field' src="./img/person1.jpg" alt="icon" />
                                <p className='fw-bold fs-5'>Alex Peters</p>
                                <p>CEO, Co-Founder</p>
                                <p className='s-text text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                            <div>
                                <img className='icon rounded-circle in_field' src="./img/person1.jpg" alt="icon" />
                                <p className='fw-bold fs-5'>Shane Cripton</p>
                                <p>President, Co-Founder</p>
                                <p className='s-text text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                    {/* 人的敘述輪播圖(尚未完成) */}
                    <div className='mb-5'>
                        <p className='fw-bold fs-5 pt-5'>TESTIMONIES</p>
                        <div className='w-75 mx-auto'>
                            <img className='icon rounded-circle' src="./img/person1.jpg" alt="icon" />
                            <p className='fw-bold fs-5 mt-3'>Shane Cripton</p>
                            <p>President, Co-Founder</p>
                            <p className='s-text text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
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

