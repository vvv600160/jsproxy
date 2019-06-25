jsproxy_config({
  // 当前配置的版本（服务端记录在日志中，方便排查问题）
  ver: '53',

  // 节点配置
  node_map: {
    'bwh-us': {
      label: '搬瓦工-美国',
      lines: [
        // 多条线路，负载均衡系统会从其中选一条
        '45.62.115.78.nip.io:8443'
      ]
    }
  },

  /**
   * 默认节点  
   */
  node_default: 'bwh-us',

  /**
   * 加速节点
   */
  node_acc: 'cfworker',

  /**
   * 静态资源 CDN 地址
   * 用于加速 `assets` 目录中的资源访问
   */
  // assets_cdn: 'https://cdn.jsdelivr.net/gh/vvv600160/vvv600160.github.io@gh-pages/assets/',

  // 本地测试时打开，否则访问的是线上的
   assets_cdn: 'assets/'
})
