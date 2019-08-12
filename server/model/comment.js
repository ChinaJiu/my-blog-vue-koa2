const db = require('../db/mysql')
const Sequelize = db.sequelize;
const Comment = Sequelize.import('../schema/comment');
const Article = Sequelize.import('../schema/article');
Comment.sync({force: false});

class CommentModel {
  static async createComments (v) {
    const article = await Article.findByPk(v.get('body.article_id'));
    if(!article) {
      throw new global.errs.NotFound('没有找到相关文章');
    }

    const comment = new Comment();
    comment.nickname = v.get('body.name');
    comment.email = v.get('body.email');
    comment.content = v.get('body.content');
    comment.article_id = v.get('body.article_id');
    comment.parent_id = v.get('body.parent_id');
    return comment.save();
  }

  //删除评论
  static async destroyComments (id) {
    const comment = await Comment.findOne({
      where: {
        id
      }
    })
    if(!comment) {
      throw new global.errs.NotFound('没有找到相关评论');
    }
    comment.destroy();
  }

  //获取评论列表
  // static async getListComments () {

  // }
}


module.exports = {
  CommentModel
}