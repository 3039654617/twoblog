import React, { useState } from 'react'
import './index.less';
import '@/assets/iconfont/iconfont.css'
import FindNav from './components/find-nav';
import SlideShow from '@/components/slideshow';
import EveryWorld from './components/every-world';

export default function IndexPage() {
  const [show, setShow] = useState(0);

  const listenClick = () => {
    setShow(show + 1)
  }


  return (
    <div className='first'>
      <div className="content" onClick={() => { listenClick() }}>
        <div className="slideshow">
          <SlideShow />
        </div>
        <div className="every-world-wrapper">
          <EveryWorld />
        </div>
      </div>
      <FindNav listenShow={show} />
    </div>
  );
}
