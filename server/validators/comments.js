const {
  Rule,
  LinValidator
} = require('../core/lin-validator-v2')
console.log(LinValidator)
class CommentsValidator extends LinValidator {
  constructor () {
    super()

    this.name = [
      new Rule("isLength", "名字不能为空", {min: 1})
    ]

    this.email = [
      new Rule('isEmail', '电子邮箱不符合规范，请输入正确的邮箱')
    ]

    this.content = [
      new Rule("isLength", "评论内容名字不能为空", {min: 1})
    ]

    this.article_id = [
      new Rule("isLength", "文章ID不能为空", {min: 1})
    ]
  }
}

module.exports = {
  CommentsValidator
}