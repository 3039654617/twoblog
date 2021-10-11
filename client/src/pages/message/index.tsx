import React, { useEffect, useState } from 'react'
import './index.less';
import { add, find } from '@/api/message';
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import moment from 'moment';

const { Search } = Input;

export default function IndexPage() {
  const [text, setText] = useState<{text: string, time: string}[]>([]);
  
  const fontSize = ['14px', '24px', '36px', '18px', '8px'];
  const fontColor = ['red', 'green', 'blue', 'pink', 'gray']

  const spanArr = text.map((item, index) => {
    const random = Math.floor(Math.random()*5);
    const style = {color: fontColor[random], fontSize: fontSize[random], marginLeft: '60px', cursor: 'pointer'}
    return (
      <span 
        style={style}
        className='message-number'
      >
        {item.text}
        <span className='time'>{item.time.split('T')[0]}</span>
      </span>
    )
  })

  useEffect(() => {
    find().then(res => {
      setText(res.data)
    })
  }, [])

  const onSend = (value: string) => {
    if(value) {
      add({
        text: value,
        time: moment().format('YYYY-MM-DD HH:mm:ss')
      }).then(() => {
        find().then(res => {
          setText(res.data)
        })
      })
    }
  };

  return (
    <div className="message-wrapper">
      <div className="message-content">
        <div className='message-input'>
          <Search placeholder="input send text" onSearch={onSend} enterButton />
        </div>
        {spanArr}
      </div>
      <div className="user-info">
        <h2>点击留言查看详情</h2>
        <div>
          是谁留的言
        </div>
      </div>
    </div>
  );
}
