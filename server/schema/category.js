const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('category', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    // 分类名
    name: DataTypes.STRING,
    // 分类键
    key: DataTypes.STRING,
    // 分类父级ID，默认为0
    parent_id: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    created_at: {
        type: DataTypes.DATE,
        get() {
            return moment(this.getDataValue('created_at')).format('YYYY-MM-DD');
        }
    }
  }, {
      // 如果为 true 则表的名称和 model 相同，即 user
      // 为 false MySQL创建的表名称会是复数 users
      // 如果指定的表名称本就是复数形式则不变
      freezeTableName: false
  })
}
