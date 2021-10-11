
import React from 'react'
import './index.less'
import { Avatar, Divider } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import header from '@/assets/douyin.png'

const LookMore: React.FC<{}> = (props) => {

  return (
    <div className='lookmore'>
      <h3>文章 推荐</h3>
      <div className="recommend-list">
        <ul>
          <li>
            <div className='top'>
              <h2>React的坑</h2>
            </div>
            <div className='bottom'>状态变化和渲染的规则，理解规则才能避免开发中遇到麻烦的问题</div>
          </li>
          <li>
            <div className='top'>
              <h2>Html高级布局</h2>
            </div>
            <div className='bottom'>状态变化和渲染的规则，理解规则才能避免开发中遇到麻烦的问题</div>
          </li>
          <li>
            <div className='top'>
              <h2>Css的妙用Css的妙用Css的妙用</h2>
            </div>
            <div className='bottom'>状态变化和渲染的规则，理解规则才能避免开发中遇到麻烦的问题</div>
          </li>
        </ul>
      </div>
      <Divider dashed />
    </div>
  )
}

export default LookMore;