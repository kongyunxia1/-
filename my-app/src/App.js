import React, { useEffect, useState } from 'react';
import { Table, Input, Button,Tag, Space } from 'antd';
import './App.css';
import {getData} from './api.js'

function App() {
    const [data,setData] = useState([]);
    useEffect(()=>{
        getDatas();
    })
    const getDatas = async () => {
        const result = await getData()
        setData(result.apis)
    }
      const columns = [
        {
          title: '名字',
          dataIndex: 'name',
          key: 'name'
        },
        {
          width: 300,
          title: '描述',
          dataIndex: 'description',
          key: 'description',
          ellipsis: true,
        },
        {
            title: 'URL',
            dataIndex: 'baseURL',
            key: 'baseURL',
            render: text => <a href='https://www.baidu.com'>{text}</a>,
          },
        {
          title: '图片',
          dataIndex: 'image',
          key: 'image',
          render: text => <img src={text}></img>,
        },
        {
          title: '标签',
          key: 'tags',
          dataIndex: 'tags',
          render: tags => (
            <>
              {tags.map(tag => {
                let color = tag.length > 3 ? 'geekblue' : 'green';
                if (tag === 'loser') {
                  color = 'volcano';
                }
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </>
          ),
        }
      ];
      
     
  return (
    <div className="App">
        <div className="J-search">
            <Input  className="J-input" placeholder="请输入" />
            <Button type="primary">搜索</Button>
        </div>
        <Table columns={columns} dataSource={data} rowKey={record => record.name}/>
    </div>
  );
}

export default App;
