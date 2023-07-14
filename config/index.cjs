/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx802ff2feafa56eb3',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'b6dd572d4c52348d095392d78c47b574',

  PROVINCE: '江苏',
  CITY: '南京',

  USERS: [
    {
      // 想要发送的人的名字
      name: '老婆',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o4Ajo6MxkqJL6-uOlrbsjVUX14mk',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'tDgM1ouhTMT5B5az0N7qQXQ6vnmrvM1VYEud647Jwa0',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '11-29',
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2021-05-14' }
      ],
    },
  ],
  IS_SHOW_COLOR:false,

  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '107fs7Mzz-zbOBxKgmnhLXsbsuQ4T-cFaMHL1RYlQjY',
  TIAN_API: {
    // 天行API KEY，如果使用天行API则需要填写此项
    key: '39a09ba210c0af601766aa5a09cfc7b4',

    /** 天行API相关，需要config中配置 TIAN_API_KEY  */
    // 早安心语, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    morningGreeting: true,

    // 晚安心语, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    eveningGreeting: false,

    // 天行天气（展示未来N天，最多7天）, 填 0 则不使用，按需关闭不使用的功能可以提高运行速度
    weather: 0,

    // 全网热搜榜（展示N条，最多30条）, 填 0 则不使用，按需关闭不使用的功能可以提高运行速度
    networkHot: 3,

    // 全网热搜榜展示类型，默认展示概要信息: ['title': 仅展示标题, 'default': 展示概要信息]
    networkHotType: 'default',
  },
  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o4Ajo6MxkqJL6-uOlrbsjVUX14mk',
    }
  ]

}

module.exports = USER_CONFIG

