module.exports = {
  types: [
    { value: 'feat', name: 'feat:     增加新功能' },
    { value: 'fix', name: 'fix:      修复bug' },
    { value: 'docs', name: 'docs:     只改动了文档相关的内容' },
    {
      value: 'style',
      name: 'style:    不影响代码含义的改动，例如去掉空格、改变缩进、增删分号',
    },
    {
      value: 'refactor',
      name: 'refactor: 代码重构时使用',
    },
    {
      value: 'perf',
      name: 'perf:     性能优化相关的改动',
    },
    { value: 'test', name: 'test:     添加测试或者修改现有测试' },
    {
      value: 'chore',
      name: 'chore:    不修改src或者test的其余修改，例如构建过程或辅助工具的变动',
    },
    { value: 'revert', name: 'revert:   执行git revert或者代码回退时的改动' },
    { value: 'ci', name: 'ci:       与CI(持续集成)有关的改动' },
    { value: 'build', name: 'build:    构建工具或者外部依赖的改动，如webpack、npm、yarn等' },
  ],

  scopes: [
    { name: '售卖页' }, 
    { name: '投放页' },
    { name: '活动页' },
    { name: '支付模块' },
  ],

  allowTicketNumber: false,
  isTicketNumberRequired: false,
  ticketNumberPrefix: 'TICKET-',
  ticketNumberRegExp: '\\d{1,5}',

  // it needs to match the value for field type. Eg.: 'fix'
  /*
  scopeOverrides: {
    fix: [
      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */
  // override the messages, defaults are as follows
  messages: {
    type: "请选择你要提交的变更类型：",
    scope: '\n表明此次更改的范围（可选的）：',
    // used if allowCustomScopes is true
    customScope: '自定义一个更改范围：',
    subject: '为本次变更写一个简短地祈使句式的描述信息：\n',
    body: '提供更改的详细说明（可选的）。使用“|”换行\n',
    breaking: '列出本次变更中的破坏性修改（breaking changes）：\n',
    footer: '列出此更改关闭的相关bug编号（可选的）。例如：#31，#34\n',
    confirmCommit: '确认要提交上面的信息吗？',
  },

  allowCustomScopes: true,
  allowBreakingChanges: false,
  // skip any questions you want
  skipQuestions: ['body', 'footer'],

  // limit subject length
  subjectLimit: 100,
};
