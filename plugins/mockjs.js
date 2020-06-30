import Mock from 'mockjs'

Mock.mock(/\/demo\/test/, {
  'list|1-10': [
    {
      'id|+1': 1,
      eamil: '@EMAIL'
    }
  ]
})
