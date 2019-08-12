const { CommentsValidator } = require('../../validators/comments')
const { CommentModel } = require('../../model/comment')

class CommentController {
  /**
   * 创建评论
   * @param {*} ctx 
   * @returns 
   */
  static async createComment (ctx) {
    let v = await new CommentsValidator().validate(ctx)
    await CommentModel.createComments(v)

    ctx.body = {
      "msg": "创建评论成功",
      "code": 200,
      "errorCode": 0
    }
  }

  /**
   * 删除评论
   * @param {*} ctx 
   * @returns 
   */
  static async deleteComment (ctx) {
    let v = await new CommentsValidator().validate(ctx)
    await CommentModel.destroyComments(v.get('path.id'))

    ctx.body = {
      "msg": "删除评论成功",
      "code": 200,
      "errorCode": 0
    }
  }

}

module.exports = CommentController