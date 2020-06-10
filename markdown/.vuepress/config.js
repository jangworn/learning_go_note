module.exports = {
  title: 'Go学习手册', // 设置网站标题
  description: 'Go学习手册',
  base: '/learning_go_note/',
  dest: './docs',
  themeConfig: {
    sidebarDepth: 4,
    displayAllHeaders: true, // 默认值：false
    sidebar: {
      '/': [
        '初识Go语言',
        '基础类型',
        '运算符',
        '流程控制',
        '函数',
        '工程管理',
        '复合类型',
        '面向对象编程',
        '异常处理',
        '文本文件处理',
        '并发编程',
        '网络编程'
      ]
    }
  }
}