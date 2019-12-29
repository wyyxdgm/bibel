// config 初始化整个任务内容
const config = {
  type: 'dev a miniprogram',
  output: {
    'miniprogram': 1
  },
  _tech_refrence: {
    'vant': 'https://youzan.github.io/vant-weapp/#/intro',
    'colorui': 'https://github.com/weilanwl/ColorUI',
    _mini_tech: {
      reference: 'https://developers.weixin.qq.com/miniprogram/dev/reference/',
      api: 'https://developers.weixin.qq.com/miniprogram/dev/api/',
      component: 'https://developers.weixin.qq.com/miniprogram/dev/component/',
      tools: 'https://developers.weixin.qq.com/miniprogram/dev/devtools/devtools.html',
    },
  },
  api: 'todo',
  tasks: 'https://work.yousails.com/project/view/100/',
  proejct_dir: '~/workspace/career/career-mina',
  prototype: 'https://free.modao.cc/app/pi4a7s4z8kek1zsjjhgjzuye9m3nck#screen=sk1zsjjo45e0x8hdf',
  lanhu_ui: 'https://lanhuapp.com/web/#/item/project/board?type=share_mark&pid=57e46101-6d1f-4218-832b-b53477c4b747&activeSectionId=&teamId=adb2bc47-2176-4c2b-8767-3e406170563c&param=none',
}

// 
let steps = {
  init: config,
  'pre check': {
    'check tech': { 'ask questions': 1 },
    'check product': { 'ask questions': 1 },
    'check ui': { 'ask questions': 1 },
    'check api': { 'ask questions': 1 },
  },
  'dev pages': {
    'build all pages model': {
      pages: [{
          page: 'x1',
          title: 'xxx',
          links: [{ element: '', when: '', link: '' }, { element: '', link: 'xxx', type: 'switchTo' }],
          'xxx': ''
        },
        ...[{ 'xxx': '' }]
      ]

    },
    'dev all pages ui': {
      steps: [{
          do: 'get lanhu page(title=授权登录)',
          'use chrome': 1
        },
        {
          do: 'pick all style',
          repeat: ['pick style', 'write files'],
        }
      ],
      filters: {
        "font-size:30rpx;": px => rpx
      }
    },
    'connect all pages': {

    },
    'complete all pages': {

    },
    'confirm all pages': {

    }
  },
}