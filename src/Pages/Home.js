import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from "swiper";

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

import './stylePages.css'

import fast from './scr/fast.png';
import money from './scr/money-bag.png'
import rest from './scr/restaurant.png'

const Home = () => {
    return (
        <div className='container'>
            <Swiper
                modules={[Navigation]}
                navigation
                speed={800}
                slidesPerView={1}
                loop={true}
                className='my__swiper'
            >
                <SwiperSlide className='slides'>
                    <div className="text__block">
                        <span>Our best qualities</span>
                        <h3>Quickly</h3>
                        <p>We deliver quickly and reliably</p>
                        <a href="#" className="btn">Order from us right now</a>
                    </div>
                    <img src={fast}/>
                </SwiperSlide >
                <SwiperSlide className='slides'>
                    <div className="text__block">
                        <span>Our best qualities</span>
                        <h3>Cheaper</h3>
                        <p>We are cheaper than Namba food</p>
                        <a href="#" className="btn">Order from us right now</a>
                    </div>
                    <img src={money}/>
                </SwiperSlide>
                <SwiperSlide className='slides'>
                    <div className="text__block">
                        <span>Our best qualities</span>
                        <h3>Many choices</h3>
                        <p>Delivery from your favorite restaurants</p>
                        <a href="#" className="btn">Order from us right now</a>
                    </div>
                    <img src={rest}/>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Home;


