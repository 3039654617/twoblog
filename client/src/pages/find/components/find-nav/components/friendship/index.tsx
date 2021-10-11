
import React from 'react'
import './index.less'
import { Avatar, Divider } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import header from '@/assets/recommend1.jpg'
import header1 from '@/assets/recommend2.jpg'
import header2 from '@/assets/recommend3.jpg'

const BlogTuiJian: React.FC<{}> = (props) => {

  return (
    <div className='blogtuijain'>
      <h3>博客 推荐</h3>
      <div className="recommend-list">
        <ul>
          <li>
            <div className='top'>
              <Avatar
                size="large"
                icon={<UserOutlined />}
                src={header}
              />
              <h2>李四</h2>
            </div>
            <span className='bottom'>经验丰富,热爱小程序,热爱熬夜，热爱加班</span>
          </li>
          <li>
            <div className='top'>
              <Avatar
                size="large"
                icon={<UserOutlined />}
                src={header1}
              />
              <h2>张小五</h2>
            </div>
            <span className='bottom'>经验丰富,热爱小程序,热爱熬夜，热爱加班</span>
          </li>
          <li>
            <div className='top'>
              <Avatar
                size="large"
                icon={<UserOutlined />}
                src={header2}
              />
              <h2>乌达</h2>
            </div>
            <span className='bottom'>经验丰富,热爱小程序,热爱熬夜，热爱加班</span>
          </li>
        </ul>
      </div>
      <Divider dashed />
    </div>
  )
}

export default BlogTuiJian;