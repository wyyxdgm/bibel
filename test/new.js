step = require('step2');

Dao('order').create = (data) => {
  // 随机订单号，位数固定
  data.order_no = Helper.buildOrderNo();
  // let { user_id } = data;
  // $survey.query(data.user_id)
  // .findOrderBuySurvey().check.is.not.empty
  // .then.$order.create()
  // .then.$orderProuct.createWithRe({order_id: re.insertId,order_product:data.order_product})
  return step(Dao('survey').query(_.pick(data, 'user_id')), `获取 问卷(user_id=${data.user_id})`)
    .ifFinedOne(Helper.getOrderParamsFromSurvey, '没有问卷数据')
    .step(Dao('order')._create).catchAsString(err => `错误信息：${err}`)
    .step(re => _.map(data.order_product, order_product => _.extend(typeof order_product === 'number' ? {
      product_id: order_product,
      status: V.ORDER_PRODUCT_STATUS.PACKED
    } : order_product, {
      order_id: re.insertId
    })))
    .when(rp => _.size(rp) > 0, Dao('orderProduct').createArray)
  // .ifelse(rp => _.size(rp) > 0, Dao('orderProduct').createArray, () => {})
}


Dao('order').delete = (id) => {
  return step(Dao('orderProduct').deleteByOrder(id))
    .step(() => exports._delete(id))
};



Controller('admin').emailResetPassword = (email) => {
  return step(Admin.findByEmail(email))
    .ifFinedOne(Controller('admin').genEmailCode(email), '邮箱未注册')
    .step(code => Mailer.sendEmail({
      to: email,
      subject: '找回密码',
      html: `<p>${email}，您好！</p>` +
        `<p>您于${moment().format('YYYY-MM-DD HH:mm')}进行找回密码操作，` +
        `验证码为：<font style="font-weight:bold">${code}</font>，验证码10分钟内有效，请及时认证。</p>` +
        '<p>如果不是您的操作，请联系客服。</p>',
    }));
};