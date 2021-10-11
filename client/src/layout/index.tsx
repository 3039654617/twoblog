import React from 'react';
import Header from './header'
import './index.less'

export default function Index(props: any) {
    
    return (
        <div className='blog-layout'>
            <div className="layout-header">
                <Header/>
            </div>
            <div className="layout-body">
                {props.children}
            </div>
        </div>
    )
}
