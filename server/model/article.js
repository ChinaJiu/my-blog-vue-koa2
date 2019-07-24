const db = require('../db/mysql')
const Sequelize = db.sequelize;
const Article = Sequelize.import('../schema/article');
Article.sync({force: false});

class ArticleModel {
    /**
     * 创建文章
     * @param data
     * @returns {Promise<*>}
     */
    static async createArticle (data) {
        const {title, author, content, cover, star, is_top, browse, category} = data;
        return await Article.create({
            title,
            author,
            content,
            cover,
            star,
            is_top,
            browse,
            category,
        })
    }

    /**
     * 获取文章详情数据
     * @returns {Promise<Model>}
     */
    static async getArticleList () {
        return await Article.findAndCountAll();
    }

    /**
     * 获取文章详情数据
     * @param id  文章ID
     * @returns {Promise<Model>}
     */
    static async getArticleDetail (id) {
        return await Article.findOne({
            where: +id
        })
    }

    /**
     * 删除文章
     * @param id listID
     * @returns {Promise.<boolean>}
     */
    static async deleteArticle(id) {
        await Article.destroy({
            where: {
                id,
            }
        })
        return true
    }

    /**
     * 更新文章数据
     * @param id  用户ID
     * @param status  事项的状态
     * @returns {Promise.<boolean>}
     */
    static async updateArticle(id, ret) {
        await Article.update(ret, {
            where: {
                id
            },
            fields: ['title', 'author', 'star', 'cover', 'is_top', 'content', 'browse', 'category']
        })
        return true
    }
}

module.exports = ArticleModel