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
        console.log('请求接口数据',result);
        console.log('请求接口数据',result.apis);
        setData(result.apis)
    }
    //   const data = [
    //     {
    //             "name": "Market Research Library",
    //             "description": "The Market Research Library API provides metadata for country and industry reports that are produced by ITA’s trade experts and are available in ITA’s online market research library.",
    //             "image": "https://api.trade.gov/apps/store/site/themes/wso2/subthemes/ita/libs/theme-wso2_1.0/images/logo-inverse.svg",
    //             "humanURL": "http://developer.trade.gov/market-research-library.html",
    //             "baseURL": "http://developer.trade.gov/market-research-library.html",
    //             "tags": [
    //                 "Hello",
    //                 "OK",
    //                 "YES"
    //             ],
    //             "properties": [{
    //                     "type": "X-Portal",
    //                     "url": "http://developer.trade.gov/market-research-library.html"
    //                 },
    //                 {
    //                     "type": "X-Documentation",
    //                     "url": "http://developer.trade.gov/market-research-library.html"
    //                 },
    //                 {
    //                     "type": "Swagger",
    //                     "url": "http://developer.trade.gov.apievangelist.com/definitions/market-research-library.json"
    //                 },
    //                 {
    //                     "type": "TermsOfService",
    //                     "url": "http://developer.trade.gov/tos.html"
    //                 }
    //             ],
    //             "contact": [{
    //                 "FN": "Market Research Library API",
    //                 "email": "DataServices@trade.gov"
    //             }]
    //     },
    //     {
    //         "name": "Consolidated Screening List",
    //         "description": "The Consolidated Screening List API consolidates eleven export screening lists of the Departments of Commerce, State and the Treasury into a single data feed as an aid to industry in conducting electronic screens of potential parties to regulated transactions.",
    //         "image": "https://api.trade.gov/apps/store/site/themes/wso2/subthemes/ita/libs/theme-wso2_1.0/images/logo-inverse.svg",
    //         "humanURL": "http://developer.trade.gov/consolidated-screening-list.html",
    //         "baseURL": "http://developer.trade.gov/consolidated-screening-list.html",
    //         "tags": [
    //             "Trade",
    //             "ITA",
    //             "CSL",
    //             "regulated",
    //             "API"
    //         ],
    //         "properties": [{
    //                 "type": "X-Portal",
    //                 "url": "http://developer.trade.gov/consolidated-screening-list.html"
    //             },
    //             {
    //                 "type": "X-Documentation",
    //                 "url": "http://developer.trade.gov/consolidated-screening-list.html"
    //             },
    //             {
    //                 "type": "Swagger",
    //                 "url": "http://developer.trade.gov.apievangelist.com/definitions/consolidated-screening-list.json"
    //             },
    //             {
    //                 "type": "TermsOfService",
    //                 "url": "http://developer.trade.gov/tos.html"
    //             }
    //         ],
    //         "contact": [{
    //             "FN": "Consolidated Screening List API",
    //             "email": "DataServices@trade.gov"
    //         }]
    //     },
    //     {
    //         "name": "Trade Events",
    //         "description": "The Trade Events API provides data on events for U.S. businesses interested in selling their products and services overseas. These events include industry conferences, webinars, lectures and trade missions organized by the U.S. Dept. of Commerce. Developers can use this API to keep businesses aware of the latest events in their industry or location.",
    //         "image": "https://api.trade.gov/apps/store/site/themes/wso2/subthemes/ita/libs/theme-wso2_1.0/images/logo-inverse.svg",
    //         "humanURL": "http://developer.trade.gov/trade-events.html",
    //         "baseURL": "http://developer.trade.gov/trade-events.html",
    //         "tags": [
    //             "Trade",
    //             "PAY",
    //             "OK",
    //             "HELLO",
    //             "IRON"
    //         ],
    //         "properties": [{
    //                 "type": "X-Portal",
    //                 "url": "http://developer.trade.gov/trade-events.html"
    //             },
    //             {
    //                 "type": "X-Documentation",
    //                 "url": "http://developer.trade.gov/trade-events.html"
    //             },
    //             {
    //                 "type": "Swagger",
    //                 "url": "http://developer.trade.gov.apievangelist.com/definitions/trade-events.json"
    //             },
    //             {
    //                 "type": "TermsOfService",
    //                 "url": "http://developer.trade.gov/tos.html"
    //             }
    //         ],
    //         "contact": [{
    //             "FN": "Trade Events API",
    //             "email": "DataServices@trade.gov"
    //         }]
    //     },
    //     {
    //         "name": "Trade Leads",
    //         "description": "The Trade Leads API provides contract opportunities for U.S. businesses selling their products and services overseas.",
    //         "image": "https://api.trade.gov/apps/store/site/themes/wso2/subthemes/ita/libs/theme-wso2_1.0/images/logo-inverse.svg",
    //         "humanURL": "http://developer.trade.gov/trade-leads.html",
    //         "baseURL": "http://developer.trade.gov/trade-leads.html",
    //         "tags": [
    //             "MAN",
    //             "GREEN",
    //             "AUTO",
    //             "Jacken",
    //             "loki",
    //             "maven",
    //             "spring"
    //         ],
    //         "properties": [{
    //                 "type": "X-Portal",
    //                 "url": "http://developer.trade.gov/trade-leads.html"
    //             },
    //             {
    //                 "type": "X-Documentation",
    //                 "url": "http://developer.trade.gov/trade-leads.html"
    //             },
    //             {
    //                 "type": "Swagger",
    //                 "url": "http://developer.trade.gov.apievangelist.com/definitions/trade-leads.json"
    //             },
    //             {
    //                 "type": "TermsOfService",
    //                 "url": "http://developer.trade.gov/tos.html"
    //             }
    //         ],
    //         "contact": [{
    //             "FN": "Trade Leads API",
    //             "email": "DataServices@trade.gov"
    //         }]
    //     },
    //     {
    //         "name": "Tariff Rates",
    //         "description": "The Tariff Rates API provides data about each country with whom the United States has a Free Trade Agreement (FTA).",
    //         "image": "https://api.trade.gov/apps/store/site/themes/wso2/subthemes/ita/libs/theme-wso2_1.0/images/logo-inverse.svg",
    //         "humanURL": "http://developer.trade.gov/tariff-rates.html",
    //         "baseURL": "http://developer.trade.gov/tariff-rates.html",
    //         "tags": [
    //             "java",
    //             "script",
    //             "react",
    //             "hello",
    //             "ok",
    //             "yes",
    //             "location"
    //         ],
    //         "properties": [{
    //                 "type": "X-Portal",
    //                 "url": "http://developer.trade.gov/tariff-rates.html"
    //             },
    //             {
    //                 "type": "X-Documentation",
    //                 "url": "http://developer.trade.gov/tariff-rates.html"
    //             },
    //             {
    //                 "type": "Swagger",
    //                 "url": "http://developer.trade.gov.apievangelist.com/definitions/tariff-rates.json"
    //             },
    //             {
    //                 "type": "TermsOfService",
    //                 "url": "http://developer.trade.gov/tos.html"
    //             }
    //         ],
    //         "contact": [{
    //             "FN": "Tariff Rates API",
    //             "email": "DataServices@trade.gov"
    //         }]
    //     },
    //     {
    //         "name": "FAQs on Exporting",
    //         "description": "The Frequenty Asked Questions (FAQs) API includes more than 300 commonly asked questions about exporting. The answers provided are from government experts that specialize in unique aspects of trade.",
    //         "image": "https://api.trade.gov/apps/store/site/themes/wso2/subthemes/ita/libs/theme-wso2_1.0/images/logo-inverse.svg",
    //         "humanURL": "http://developer.trade.gov/faqs-exporting.html",
    //         "baseURL": "http://developer.trade.gov/faqs-exporting.html",
    //         "tags": [
    //             "a",
    //             "b",
    //             "c",
    //             "d",
    //             "e",
    //             "fff",
    //             "ddd"
    //         ],
    //         "properties": [{
    //                 "type": "X-Portal",
    //                 "url": "http://developer.trade.gov/faqs-exporting.html"
    //             },
    //             {
    //                 "type": "X-Documentation",
    //                 "url": "http://developer.trade.gov/faqs-exporting.html"
    //             },
    //             {
    //                 "type": "Swagger",
    //                 "url": "http://developer.trade.gov.apievangelist.com/definitions/faqs-exporting.json"
    //             },
    //             {
    //                 "type": "TermsOfService",
    //                 "url": "http://developer.trade.gov/tos.html"
    //             }
    //         ],
    //         "contact": [{
    //             "FN": "FAQs on Exporting API",
    //             "email": "DataServices@trade.gov"
    //         }]
    //     },
    //     {
    //         "name": "ITA Offices & Centers",
    //         "description": "This API provides contact and address information for all of ITA's domestic and international export assistance centers. Incorporating these listings into directories of business counseling services is one example of how developers can use this API to assist exporters.",
    //         "image": "https://api.trade.gov/apps/store/site/themes/wso2/subthemes/ita/libs/theme-wso2_1.0/images/logo-inverse.svg",
    //         "humanURL": "http://developer.trade.gov/ita-office-locations.html",
    //         "baseURL": "http://developer.trade.gov/ita-office-locations.html",
    //         "tags": [
    //             "Trade"
    //         ],
    //         "properties": [{
    //                 "type": "X-Portal",
    //                 "url": "http://developer.trade.gov/ita-office-locations.html"
    //             },
    //             {
    //                 "type": "X-Documentation",
    //                 "url": "http://developer.trade.gov/ita-office-locations.html"
    //             },
    //             {
    //                 "type": "Swagger",
    //                 "url": "http://developer.trade.gov.apievangelist.com/definitions/ita-office-locations.json"
    //             },
    //             {
    //                 "type": "TermsOfService",
    //                 "url": "http://developer.trade.gov/tos.html"
    //             }
    //         ],
    //         "contact": [{
    //             "FN": "ITA Offices & Centers API",
    //             "email": "DataServices@trade.gov"
    //         }]
    //     },
    //     {
    //         "name": "Trade News & Articles",
    //         "description": "The Trade News & Articles API provides in-depth news and articles written by Trade Specialists working in the Federal government.",
    //         "image": "https://api.trade.gov/apps/store/site/themes/wso2/subthemes/ita/libs/theme-wso2_1.0/images/logo-inverse.svg",
    //         "humanURL": "http://developer.trade.gov/trade-news-articles.html",
    //         "baseURL": "http://developer.trade.gov/trade-news-articles.html",
    //         "tags": [],
    //         "properties": [{
    //                 "type": "X-Portal",
    //                 "url": "http://developer.trade.gov/trade-news-articles.html"
    //             },
    //             {
    //                 "type": "X-Documentation",
    //                 "url": "http://developer.trade.gov/trade-news-articles.html"
    //             },
    //             {
    //                 "type": "Swagger",
    //                 "url": "http://developer.trade.gov.apievangelist.com/definitions/trade-news-articles.json"
    //             },
    //             {
    //                 "type": "TermsOfService",
    //                 "url": "http://developer.trade.gov/tos.html"
    //             }
    //         ],
    //         "contact": [{
    //             "FN": "Trade News & Articles API",
    //             "email": "DataServices@trade.gov"
    //         }]
    //     }
    // ];
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
