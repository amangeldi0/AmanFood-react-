import './stylePages.css';
import trans from './scr/del.png';

import headphones from './scr/headphones.png';
import coins from './scr/coins.png';
import track from './scr/track.png'

const About = () => {
    return (
        <div>
            <main className="about" id="about">
                <h3>About Us</h3>
                <h1>WHY CHOOSE US?</h1>
                <div className="about__content">
                    <div className="photo"><img src={trans}/></div>
                    <div className="describe">
                        <h1>Best Delivery In Bishkek</h1>
                        <p>350 best places in the city for every taste, delivery of food and alcohol from supermarkets
                            and markets, medicines from pharmacies, personal courier service, anonymous delivery from a
                            sex shop, all this is in your pocket</p>
                        <p>On the market for over 10 years</p>
                        <div className="inf">
                            <div className="quality">
                                <img src={track}/>
                                <span>free delivery</span>
                            </div>
                            <div className="quality">
                                <img src={coins}/>
                                <span>easy payments</span>
                            </div>
                            <div className="quality">
                                <img src={headphones}/>
                                <span>24/7 service</span>
                            </div>
                        </div>
                        <a href="#" className="btn">learn more</a>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default About;