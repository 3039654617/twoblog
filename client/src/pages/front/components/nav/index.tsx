import React, { useEffect, useState } from 'react'
import { Row, Col, Space } from 'antd';
import './index.less'
import '@/assets/iconfont/iconfont.css'
import { findMore } from '@/api/content';

const FrontNav: React.FC<{
    condition: any
}> = (props) => {
    const [number, setNumber] = useState([])
    const navArr = [
        { icon: 'icon-html5', number: 12, name: 'html' },
        { icon: 'icon-css', number: 2, name: 'css' },
        { icon: 'icon-js', number: 1, name: 'js' },
        { icon: 'icon-wangluo', number: 0, name: '网络' },
        { icon: 'icon-lodash', number: 1, name: 'lodash' },
        { icon: 'icon-Moment', number: 5, name: 'moment' },
        { icon: 'icon-hammock', number: 1, name: 'mock' },
        { icon: 'icon-Bootstrap', number: 1, name: 'Bootstrap' },
        { icon: 'icon-zu1', number: 3300, name: 'ES6' },
        { icon: 'icon-npm', number: 2, name: '包管理' },
        { icon: 'icon-tubiao-', number: 200, name: '模块化' },
        { icon: 'icon-React', number: 2, name: 'React'},
        { icon: 'icon-Vue', number: 65, name: 'Vue' },
        { icon: 'icon-webpack', number: 2, name: 'webpack' },
        { icon: 'icon-MV', number: 2, name: 'MVVM' },
        { icon: 'icon-sheji', number: 2, name: 'design' },
        { icon: 'icon-node', number: 2, name: 'node' },
        { icon: 'icon-R', number: 2, name: 'SSR' },
        { icon: 'icon-file_type_typescript', number: 2, name: 'TS' },
        { icon: 'icon-ziyuan', number: 2, name: 'MongoDB' },
        { icon: 'icon-bushu', number: 2, name: '部署' },
        { icon: 'icon-icons8-flutter', number: 2, name: 'flutter' },
    ];

    const getClassNumber = () => {
        let numArr = [];
        navArr.map((item, index) => {
            findMore({class: item.name}).then(res => {
                numArr.push({...item, ...{number: res.data.data.count ? res.data.data.count : '-'}})
                console.log(res.data.data);
                // setContent(res.data.data.data)
              })
        })
        setNumber(numArr)
        console.log(numArr);
    }

    useEffect(() => {
        getClassNumber()
      }, [])

    const htmlNav = number.map((item, index) => {
        return (
            <li key={index} onClick={() => {
                props.condition({class: item.name});
                console.log(item.name);
                
            }}>
                <span className={`iconfont ${item.icon}`} />
                <p className='float-number'>{item.number}</p>
                <p className='class-name'>{item.name}</p>
            </li>
        )
    })

    console.log(props.condition);
    
    return (
        <div className='front-nav'>
            <ul>
                {htmlNav}
            </ul>
        </div>
    )
}

export default FrontNav;

