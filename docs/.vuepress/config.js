module.exports = {
    title: 'Night of the Dead TRPG',
    description: 'Night of the Dead TRPG',
    base: '/night-of-the-dead/',
    repo: 'https://github.com/dolatrpg/night-of-the-dead',
    themeConfig: {
        sidebarDepth: 0,
        sidebar:[
            ['/', '系統簡介'],
            {
                title: '系統',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/system/character'
                ]
            },
            {
                title: '故事',
                collapsable: true,
                sidebarDepth: 2,
                children: [
                    '/story/01.md'
                ]
            }
        ]
    }
}
