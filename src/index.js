import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Page extends React.Component {
    render() {
        return (
            <>
                <img className='titleImg' src="./img/photo1.jpg" alt="photo1" />
                <div>
                    <p>PRODUCTS & SERVICES</p>
                    <p>INSURANCE COVERAGE</p>
                    <div className='blocks'>
                        <div className='block'>
                            <img className='img' src="./img/img0.jpg" alt="img0" />
                            <p>AUTO INSURANCE</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                            <button>LEARN MORE</button>
                        </div>
                        <div className='block'>
                            <img className='img' src="./img/img0.jpg" alt="img0" />
                            <p>AUTO INSURANCE</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                            <button>LEARN MORE</button>
                        </div>
                        <div className='block'>
                            <img className='img' src="./img/img0.jpg" alt="img0" />
                            <p>AUTO INSURANCE</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                            <button>LEARN MORE</button>
                        </div>
                    </div>
                    <div>
                        <p>WE ARE TRUSTED AGENCY COMPANY</p>
                        <img className='photo' src="./img/img1.jpg" alt="img1" />
                        <div className='blocks'>
                            <p className='intro'>aaaa</p>
                            <p className='intro'>bbbb</p>
                            <p className='intro'>cccc</p>
                        </div>
                    </div>
                    <div className ='field'>
                        <img className='photo' src="./img/img1.jpg" alt="img1" />
                        <div>
                            <p>OUTSTANDING SERVICES</p>
                            <p>WHY CHOOSE US</p>
                            <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                        </div>
                    </div>
                    <div className ='field'>
                        <div>
                            <p>OUTSTANDING SERVICES</p>
                            <p>WHY CHOOSE US</p>
                            <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                        </div>
                        <img className='photo' src="./img/img1.jpg" alt="img1" />
                    </div>
                    <div>
                        <p>OUTSTANDING SERVICES</p>
                        <p>WHY CHOOSE US</p>
                        <div>
                            
                        </div>
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

