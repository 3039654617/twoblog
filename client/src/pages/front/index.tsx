import React, { useEffect, useState } from 'react'
import './index.less';
import { Divider } from 'antd';
import { history } from 'umi';
import FrontNav from './components/nav';
// import FrontContent from './components/front-content';
import { findMore, edit } from '@/api/content';

export default function IndexPage() {
  const [content, setContent] = useState([]);
  const [condition, setCondition] = useState({ class: 'html' });


  useEffect(() => {
    findMore(condition).then(res => {
      console.log(res.data.data.data);

      setContent(res.data.data.data)
    })
  }, [condition])

  const liArr = content.map((item, index) => {
    return (
      <li key={index}>
        <div className='content'>
          <h2
            onClick={() => {
              history.push(`/content?id=${item._id}`)
            }}
          >{item.title}</h2>
          <p>{item.description}</p>
        </div>
        <div className="content-bottom">
          <span><i className="iconfont icon-07" />{' '}{item.author}</span>
          <span><i className="iconfont icon-shijian" style={{color: 'green'}}/>{' '}{item.time.split('T')[0]}</span>
          <span onClick={() => {
            history.push(`/content?id=${item._id}`)
          }}><i className="iconfont icon-xiaoxi" />{!item.comment.length ? '-' : item.comment.length}</span>
          <span onClick={() => {
            const like = item.like ? item.like : 0;
            edit(item._id, {...item, ...{like: like + 1}}).then((res) => {
              if(res.status === 200) {
                findMore(condition).then(res => {
                  console.log(res.data.data.data);
                  setContent(res.data.data.data)
                })
              }
              console.log(res);
              
            })
          }}><i className="iconfont icon-aixin" />{item.like}</span>
        </div>
        <Divider dashed />
      </li>
    )
  })

  type nav = {
    class: string
  }

  const conditionEvent = (nav: nav) => {
    setCondition(nav)
  };

  return (
    <div className='front-wrapper'>
      <div className="front-content">
        <ul>
          {liArr}
        </ul>
      </div>
      <div className="front-nav-wrapper">
        <FrontNav condition={conditionEvent} />
      </div>
    </div>
  );
}
