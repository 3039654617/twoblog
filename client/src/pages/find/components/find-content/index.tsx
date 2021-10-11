import React, { useState } from 'react'
import './index.less';
import { history } from 'umi';
import { Divider } from 'antd';
import img from '@/assets/content.png';
import qqImg from '@/assets/qq.png';
import zhihuImg from '@/assets/zhihu.png';
import douyinImg from '@/assets/douyin.png';
import weixinImg from '@/assets/weixin.png';
import '@/assets/iconfont/iconfont.css'

export default function IndexPage() {
  const [show, setShow] = useState({
    qq: false,
    weixin: false,
    zhihu: false,
    douyin: false
  });

  const message = [{
    h2: '不是放不下，而是不想放下，做人还是要放过自己',
    p: '在这一生，你我会遇到很多的人，有的人留在了你的生命里，而有些人在你的生命里，只是开出一季会衰败的花朵，荼蘼了你生活中的一程。 有时候，情爱二字真...',
    diamond: 5.2,
    name: '染夏英子',
    comment: 5,
    like: 23,
    id: 222443
  }]

  const liArr = message.map((item, index) => {
    return (
      <li>
        <div className="content-message">
          <div className='content-img'>
            <h2
              onClick={() => {
                window.open('https://www.yuque.com/u1968403/uytdbx/hn18a1')
                // history.push(`/content/?id=${item.id}`)
              }}
            >{item.h2}</h2>
            <p>{item.p}</p>
          </div>
          <img src={img} alt="图片" />
        </div>
        <div className="content-bottom">
          <span><i className="iconfont icon-zuanshix" />{item.diamond}</span>
          <span>{item.name}</span>
          <span><i className="iconfont icon-xiaoxi" />{item.comment}</span>
          <span><i className="iconfont icon-aixin" />{item.like}</span>
        </div>
        <Divider dashed />
      </li>
    )
  })



  return (
    <div className='first'>
      <div className="content"  onClick={() => {
        setShow({qq: false,weixin: false,zhihu: false,douyin: false})
      }}>
        <ul>
          {liArr}
        </ul>
      </div>
      <div className="nav">
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
      </div>
    </div>
  );
}
