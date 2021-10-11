import React, { useEffect, useState } from 'react'
import './index.less';
import { Divider } from 'antd';
import qqImg from '@/assets/qq.png';
import zhihuImg from '@/assets/zhihu.png';
import douyinImg from '@/assets/douyin.png';
import weixinImg from '@/assets/weixin.png';

const MyInfoNav:React.FC<{
  listenShow: number
}> = (props) => {
  const [show, setShow] = useState({
    qq: false,
    weixin: false,
    zhihu: false,
    douyin: false
  });

  useEffect(() => {
    setShow({
      qq: false,
      weixin: false,
      zhihu: false,
      douyin: false
    })
  }, [props.listenShow])

  return (
        <ul className='nav-content'>
          <li className='nav-content-myself'>
            <h3>bigpeng.info</h3>
            <div className='app-account'>
              <i
                className="iconfont icon-QQ"
                onClick={() => {
                  setShow({...{qq: false,weixin: false,zhihu: false,douyin: false}, qq: true})
                }}
              >
                {show.qq && (<div className='erweima'>
                  <img src={qqImg} alt="" />
                </div>)}
              </i>
              <i 
                className="iconfont icon-weixing"
                onClick={() => {
                  setShow({...{qq: false,weixin: false,zhihu: false,douyin: false}, weixin: true})
                }}
              >
                {show.weixin && (<div className='erweima'>
                  <img src={weixinImg} alt="" />
                </div>)}
              </i>
              <i 
                className="iconfont icon-shejiaotubiao-46"
                onClick={() => {
                  setShow({...{qq: false,weixin: false,zhihu: false,douyin: false}, zhihu: true})
                }}
              >
                {show.zhihu && (<div className='erweima'>
                  <img src={zhihuImg} alt="" />
                </div>)}
              </i>
              <i 
                className="iconfont icon-douyin_douyinfensi"
                onClick={() => {
                  setShow({...{qq: false,weixin: false,zhihu: false,douyin: false}, douyin: true})
                }}
              >
                {show.douyin && (<div className='erweima'>
                  <img src={douyinImg} alt="" />
                </div>)}
              </i>
            </div>
            <Divider dashed />
          </li>
        </ul>
  );
}

export default MyInfoNav;
