import React from 'react'
import { history } from 'umi'
import { Row, Col } from 'antd';
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const { Search } = Input;

import './index.less'
const Index: React.FC<{}> = (props) => {
    const li = [
        { title: '发现', route: '/find' },
        { title: '前端', route: '/front' },
        { title: '创作', route: '/create' },
        { title: '其他', route: '/other' },
        { title: '留言', route: '/message' }].map((item, index) => {
            if (location.pathname.includes(item.route)) {
                return (<li onClick={() => {
                    history.push(item.route)
                }} key={index} className='select'>{item.title}</li>)
            } else {
                return (<li onClick={() => {
                    history.push(item.route)
                }} key={index}>{item.title}</li>)
            }
        })

    const suffix = (
        <AudioOutlined
            style={{
                fontSize: 16,
                color: '#1890ff',
            }}
        />
    );

    const onSearch = (value: string) => console.log(value);

    return (
        <div className='header'>
            <div className='position'>
                <ul>
                    {li}
                </ul>
                <div className="input">
                    <Search
                        placeholder="请输入关键词"
                        allowClear
                        enterButton="搜索"
                        size="large"
                        onSearch={onSearch}
                    />
                </div>
            </div>
        </div>
    )
}

export default Index;
