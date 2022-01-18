# -
table-column优化问题

const BASE = 'http://hello.com/'
const table = [
  {
  title:"标题1",
  key:'1',
  render:item => <a href={BASE + 1}>item[1]</a>
  },
  {
    title:"标题2",
    key:'2',
    render:item => <a href={BASE + 2}>item[2]</a>
  },
  {
    title:"标题3",
    key:'3',
    render:item => <a href={BASE + 3}>item[3]</a>
  }
]