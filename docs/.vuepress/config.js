module.exports = {
    title: 'Night of the Dead TRPG',
    description: 'Night of the Dead TRPG',
    base: '/night-of-the-dead/',
    repo: 'https://github.com/dolatrpg/night-of-the-dead',
    themeConfig: {
        sidebarDepth: 2,
        sidebar:[
            ['/', '系統簡介'],
            {
                title: '系統',
                collapsable: false,
                children: [
                    '/system/character'
                ]
            },
            {
                title: '故事',
                collapsable: false,
                children: [
                    '/story/01.md'
                ]
            }
        ]
    }
}
