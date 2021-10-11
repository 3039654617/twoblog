import { Carousel } from 'antd';
import React from 'react'
import './index.less'
import carousel1 from '@/assets/carousel1.jpeg'
import carousel2 from '@/assets/carousel2.jpeg'
import carousel3 from '@/assets/carousel3.jpeg'
import carousel4 from '@/assets/carousel4.jpeg'

const SlideShow: React.FC<{}> = () => {

    function onChange(a) {
        console.log(a);
    }

    return (
        <div className='carousel'>
            <Carousel afterChange={onChange} autoplay>
                <img src={carousel1} alt="走马灯没了" />
                <img src={carousel2} alt="走马灯没了" />
                <img src={carousel3} alt="走马灯没了" />
                <img src={carousel4} alt="走马灯没了" />
            </Carousel>,
        </div>
    )
}

export default SlideShow;
