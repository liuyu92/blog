// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '技术',
    link: '/technology/',
    items: [
      { text: '技术文档', link: '/pages/9a7ee40fc232253e/' },
      { text: 'GitHub技巧', link: '/pages/4c778760be26d8b3/' },
      { text: 'Nodejs', link: '/pages/117708e0af7f0bd9/' },
      { text: '博客搭建', link: '/pages/41f87d890d0a02af/' },
    ],
  },
  {
    text: 'nacos',
    link: '/nacos/',
    items: [
      { text: 'nacos安装以及使用', link: '/pages/nacos-download/' },
      { text: 'nacos配置中心', link: '/pages/nacos-config/' },
      { text: 'nacos注册中心', link: '/pages/nacos-discovery/' },
    ],
  },
  {
    text: 'seata',
    link: '/seata/',
    items: [
      { text: 'seata安装以及使用', link: '/pages/seata-download/' },
      { text: 'seata整合mybatis-plus', link: '/pages/seata-mybatis-plus/' },
    ],
  },
  {
    text: 'socket.io',
    link: '/socket.io/',
    items: [
      { text: 'springboot整合socket.io', link: '/pages/socket.io/' },
      { text: 'gateway配置socket.io', link: '/pages/gateway-socket.io/' },
    ],
  },
  {
    text: 'docker',
    link: '/docker/',
    items: [
      { text: 'docker安装', link: '/pages/docker-install/' },
      { text: 'docker安装nginx', link: '/pages/docker-install-nginx' },
    ],
  },
  {
    text: 'SpringBoot',
    link: '/springboot/',
    items: [
      { text: 'SpringBoot整合swagger', link: '/pages/swagger/' },
      { text: 'SpringBoot整合Oauth2+jwt', link: '/pages/oauth2.0/' },
    ],
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
]
