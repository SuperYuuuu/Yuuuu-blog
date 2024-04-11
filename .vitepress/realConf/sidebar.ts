import { DefaultTheme } from 'vitepress';
export const sidebar: DefaultTheme.Sidebar = {
  // /column/Algothm/表示对这个文件夹下的所有md文件做侧边栏配置
  '/docs/Backend/Algorithm/': [
     // 第一部分
    {
      text: '栈和队列',
      items: [
        {
          text: '栈-深拷贝和浅拷贝',
          link: '/docs/Backend/Algorithm/001_Stack'
        },
        {
          text: '队列-事件循环',
          link: '/docs/Backend/Algorithm/002_Queue'
        }
      ]
    },
    // 第二部分
    {
      text: '字典和树',
      items: [
        {
          text: '字典和集合-Set和Map',
          link: '/docs/Backend/Algorithm/003_Dictionary'
        },
        {
          text: '树-深/广度优先遍历',
          link: '/docs/Backend/Algorithm/004_Tree'
        }
      ]
    }
  ]
};