import React, { useEffect, useState } from 'react'
import './index.less';
import { history } from 'umi';
import { Divider, Steps } from 'antd';
const { Step } = Steps;
import moment from 'moment'
import ReactWEditor from 'wangeditor-for-react';
import { add, edit, find } from '@/api/content';
import { Form, Input, Button, Select } from 'antd';
import { FormInstance } from 'antd/es/form';

const { Option } = Select;

export default function IndexPage(props) {
  const [content, setContent] = useState({})
  const [step, setStep] = useState(0)
  const [send, setSend] = useState('')
  const [contentDefault, setContentDefault] = useState('请开始创作吧！')


  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const formRef = React.createRef<FormInstance>();

  const onGenderChange = (value: string) => {
    switch (value) {
      case 'male':
        formRef.current!.setFieldsValue({ note: 'Hi, man!' });
        return;
      case 'female':
        formRef.current!.setFieldsValue({ note: 'Hi, lady!' });
        return;
      case 'other':
        formRef.current!.setFieldsValue({ note: 'Hi there!' });
    }
  };

  const onFinish = (values: any) => {
    changeStep(2)
    const auto = {
      time: moment().format('YYYY-MM-DD HH:mm:ss'),
    }
    if(props.location.search === '') {
      add({ ...{ data: content }, ...values, ...auto }).then( res => {
        console.log(res);
        if(res.status === 200) {
          setSend(`保存${res.data.data.title}成功`)
        }  
      })
    } else {
      edit(props.location.query.id, { ...{ data: content }, ...values, ...auto }).then( res => {
        console.log(res);
        if(res.status === 200) {
          if(res.data.data.ok === 1) {
            setSend(`修改${contentDefault.title}成功`)
          }
        }  
      })
    }
    setContent({ ...{ data: content }, ...values, ...auto })
    // console.log(values, { ...{ data: content }, ...values, ...auto });
  };

  const onFill = () => {
    if(props.location.search === '') {
      formRef.current!.setFieldsValue({
        title: 'html进阶',
        class: 'html',
        author: '彭浪',
        description: 'html是前端的基础'
      });
    } else {
      formRef.current!.setFieldsValue({
        title: contentDefault.title,
        class: contentDefault.class,
        author: contentDefault.author,
        description: contentDefault.description
      });
    }
  };

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

  const chooseArr = navArr.map((item, index) => {
    return (
      <Option value={item.name}>{item.name}</Option>
    )
  })

  // props.location.query.id 地址栏传过来的参数
  console.log(props.location.query.id, props.location.query.id === '615bbcfc42ee991578fbd765', props);


  const initInput = () => {
      console.log(props.location.pathname === '/create', props.location);

      if(props.location.search === '') {
        setContentDefault('ehrrh')
      } else {
        find(props.location.query.id).then(res => {
          console.log(res.data.data, 11111, contentDefault);
          setContentDefault(res.data.data)
        })
      }
  }

  useEffect(() => {
    initInput();
  }, []);

  const changeStep = (index: number) => {
    setStep(index)
  }
  return (
    <div>
      <div className='step'>
        <Steps size="small" current={step}>
          <Step title="输入内容" onClick={() => {
            changeStep(0)
          }} />
          <Step title="补充信息" onClick={() => {
            changeStep(1);
          }} />
          <Step title="提交" onClick={() => {
            changeStep(2)
          }} />
        </Steps>
      </div>
      {
        step === 0 && (
          <ReactWEditor
            defaultValue={contentDefault.data}
            linkImgCallback={(src, alt, href) => {
              // 插入网络图片的回调事件
              console.log('图片 src ', src)
              console.log('图片文字说明', alt)
              console.log('跳转链接', href)
            }}
            onlineVideoCallback={(video) => {
              // 插入网络视频的回调事件
              console.log('插入视频内容', video)
            }}
            onChange={(html) => {
              setContent(html)
              console.log('onBlur html:', html)
            }}
            onBlur={(html) => {
              setContent({ data: html })
              console.log('onBlur html:', html)
            }}
            onFocus={(html) => {
              console.log('onFocus html:', html)
            }}
          />
        ) 
      }
      {
        step === 1 && (
            <div className="form">
              <Form {...layout} ref={formRef} name="control-ref" onFinish={onFinish}>
                <Form.Item name="title" label="标题" rules={[{ required: true }]}>
                  <Input />
                </Form.Item>
                <Form.Item name="class" label="分类" rules={[{ required: true }]}>
                  <Select
                    placeholder="选择类型"
                    onChange={onGenderChange}
                    allowClear
                  >
                    {chooseArr}
                  </Select>
                </Form.Item>
                <Form.Item name="author" label="作者" rules={[{ required: true }]}>
                  <Input />
                </Form.Item>
                <Form.Item name="description" label="描述" rules={[{ required: true }]}>
                  <Input />
                </Form.Item>
                <Form.Item {...tailLayout}>
                  <Button type="primary" htmlType="submit">
                    提交
                  </Button>
                  <Button type="link" htmlType="button" onClick={onFill}>
                    默认
                  </Button>
                </Form.Item>
              </Form>
            </div>
        )
      }
      {
        step === 2 && (
          <h1 className='step-three'>{send}</h1>
        )
      }
    </div>
  );
}