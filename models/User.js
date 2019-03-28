const keystone = require('keystone')

const { Types } = keystone.Field

const User = new keystone.List('User', {
  label: '用户',
  singular: 'User',
  plural: 'Users',
  nodelete: true,
  track: {
    createdAt: true,
    createdBy: true
  }
})

User.add({
  name: { label: '姓名', type: String },
  email: { label: '邮箱', type: Types.Email, unique: true },
  password: { label: '密码', type: Types.Password },
  is_admin: { label: '是否管理员', type: Boolean }
})

User.schema.virtual('canAccessKeystone').get(function () {
  return this.is_admin
})

User.defaultColumns = 'id, name, email'

User.register()
