import React, { createElement, useEffect, useState } from 'react';
import { Comment, Tooltip, Avatar, Divider } from 'antd';
import moment from 'moment';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
import './index.less'
import { history } from 'umi';
import { find } from '@/api/content';


const Content: React.FC<{}> = (props) => {
    const [content, setContent] = useState({});
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [action, setAction] = useState(null);
    const [edit, setEdit] = useState(0);
    console.log(props.location.query.id);

    useEffect(() => {
        find(props.location.query.id).then(res => {
            console.log(res.data.data);

            setContent(res.data.data)
        })
    }, [])

    function showhtml(htmlString) {

        return <div dangerouslySetInnerHTML={{ __html: htmlString }}></div>;

    }

    console.log(props.location.query);

    const like = () => {
        setLikes(1);
        setDislikes(0);
        setAction('liked');
    };

    const dislike = () => {
        setLikes(0);
        setDislikes(1);
        setAction('disliked');
    };

    const actions = [
        <Tooltip key="comment-basic-like" title="Like">
            <span onClick={like}>
                {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
                <span className="comment-action">{likes}</span>
            </span>
        </Tooltip>,
        <Tooltip key="comment-basic-dislike" title="Dislike">
            <span onClick={dislike}>
                {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
                <span className="comment-action">{dislikes}</span>
            </span>
        </Tooltip>,
        <span key="comment-basic-reply-to">Reply to</span>,
    ];

    const editContent = () => {
        setEdit(edit+1);

        //模拟双击跳转到编辑路由
        setTimeout(() => {
            setEdit(0);
        },300)
        if(edit === 1) {
            history.push(`/create?id=${props.location.query.id}`)
        }
    }

    return (
        <div className='content-look'>
            <div className="content-wrapper">
                        <h1>{content.title}</h1>
                        <Divider dashed />
                        <div className='content'
                            onClick={() => {
                                editContent();
                            }}
                        >
                            {showhtml(content.data)}
                        </div>
                <div className="antd-comment">
                    <Comment
                        actions={actions}
                        author={<a>李开发</a>}
                        avatar={
                            <Avatar
                                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                alt="Han Solo"
                            />
                        }
                        content={
                            <p>
                                评论功能暂未开发完成
                            </p>
                        }
                        datetime={
                            <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                                <span>{moment().fromNow()}</span>
                            </Tooltip>
                        }
                    />
                </div>
            </div>
            {/* <div className='content-nav'> */}
                {/* rretejt */}
            {/* </div> */}
        </div>

    )
}

export default Content;
