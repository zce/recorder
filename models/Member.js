const keystone = require('keystone')

const { Types } = keystone.Field

const Member = new keystone.List('Member', {
  label: '会员',
  singular: 'Member',
  plural: 'Members',
  nodelete: true,
  track: {
    createdAt: true,
    createdBy: true
  }
})

Member.add({
  name: { label: '姓名', type: String },
  gender: { label: '性别', type: Types.Select, options: '男, 女, 未知' },
  age: { label: '年龄', type: Number },
  phone: { label: '手机号码', type: String, unique: true },
  idcard: { label: '身份证号码', type: String, unique: true },
  email: { label: '邮箱', type: Types.Email, unique: true },
  qq: { label: 'QQ', type: String },
  wechat: { label: '微信', type: String },
  now_city: { label: '所在城市', type: String },
  contact_name: { label: '联系人', type: String },
  contact_phone: { label: '联系人电话', type: String },
  education: { label: '学历', type: Types.Select, options: '本科, 专科, 高中, 硕士, 博士, 其他' },
  school: { label: '毕业学校', type: String },
  major: { label: '主修专业', type: String },
  graduated_at: { label: '毕业时间', type: Types.Date },
  target_subject: { label: '预报名学科', type: Types.Select, options: '前端，JavaEE，Python，.Net，大数据，产品经理，软件测试，UI/UE' },
  target_class: { label: '预报名班级', type: String },
  coming_at: { label: '预报道时间', type: Types.Date },
  paied: { label: '缴齐学费', type: Boolean },
  paied_at: { label: '付款时间', type: Types.Date },
  promo_code: { label: '优惠码', type: String },
  note: { label: '备注', type: Types.Textarea }
})

Member.defaultColumns = 'name, gender, phone, qq, target_subject, target_class, paied'

Member.register()

/*

学历
毕业院校
专业
毕业时间
目前所在地
预计到校时间
家庭联系人及电话
缴费时间
优惠码
*/
