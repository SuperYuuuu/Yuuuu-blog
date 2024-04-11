// docs/.vitepress/relaConf/navbar.ts
import { DefaultTheme } from 'vitepress';
export const nav: DefaultTheme.NavItem[] = [
    {
        text: '首页',
        link: '/' // 表示docs/index.md
    },
    {
        text: '个人成长',
        items: [
            {
                text: '编程能手',
                link: '/column/Coding/' // 表示docs/column/Coding/index.md
            },
            {
                text: '所思·所想',
                link: '/column/Growing/' // 表示docs/column/Growing/index.md
            }
        ]
    },
    {text: '后端开发', items: [
            {text: '数据结构预算法', link: '/column/Algothrim/'}
        ]
    },
    {text: '工具相关', items: [
            {text: 'Markdown', link: '/column/Tool/Markdown'}
        ]
    },
    {
        text: '关于我',
        items: [
            { text: 'Github', link: 'https://github.com/SuperYuuuu' }
        ]
    }
];