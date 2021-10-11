import React, { useEffect, useState } from 'react'
import './index.less';
import { Divider } from 'antd';
import MyInfoNav from './components/my-info';
import BlogTuiJian from './components/friendship';
import LookMore from './components/look-more';

const FindNavWrapper: React.FC<{
  listenShow: number
}> = (props) => {


  return (
    <div className="nav-wrapper">
      <MyInfoNav listenShow={props.listenShow} />
      <div className="blogtuijian-wrapper">
        <BlogTuiJian />
      </div>
      <div className="lookmore-wrapper">
        <LookMore />
      </div>
    </div>
  );
}

export default FindNavWrapper;
