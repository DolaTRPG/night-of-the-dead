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
                title: '故事1: 復活愛人的少女',
                collapsable: true,
                children: [
                    ['/story/01/pc-kelsey.md', '玩家角色：凱爾希．萊特'],
                    '/story/01/npc.md',
                    '/story/01/story.md',
                    '/story/01/note.md'
                ]
            }
        ]
    }
}
