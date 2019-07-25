const ArticleModel = require('../model/article')

class ArticleController {
    /**
     * 创建文章
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async createArticle(ctx) {
        const article = ctx.request.body;
        if(article) {
            const data = await ArticleModel.createArticle(article)
            const detail = await ArticleModel.getArticleDetail(data.id)
            if(data) {
                ctx.body = {
                    code: 200,
                    data: detail,
                    message: '创建成功'
                }
            }else{
                ctx.body = {
                    code: -1,
                    message: '创建失败'
                }
            }
        }else{
            ctx.body = {
                code: -1,
                message: '参数错误'
            }
        }
    }

    /**
     * 获取文章列表
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async getArticleList (ctx) {
        const list = await ArticleModel.getArticleList()
        if (list) {
            ctx.body = {
                code: 200,
                data: {
                    list
                },
                message: '查询列表成功'
            }
        } else {
            ctx.body = {
                code: -1,
                message: '查询列表失败'
            }
        }
    }

    /**
     * 获取文章详情
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async getArticleDetail (ctx) {
        const id = ctx.params.id;
        if(id) {
            const data = await ArticleModel.getArticleDetail(id);
            ctx.body = {
                code: 200,
                data: {
                    data
                },
                message: '查询成功'
            }
        }else{
            ctx.body = {
                code: -1,
                message: '参数错误'
            }
        }
    }

    /**
     * 删除文章数据
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async deleteArticle(ctx) {
        let id = ctx.params.id;

        if (id && !isNaN(id)) {
            await ArticleModel.deleteArticle(id);
            ctx.body = {
                code: 200,
                message: '删除成功'
            }
        } else {
            ctx.body = {
                code: -1,
                message: '参数错误，删除失败'
            }
        }
    }

    /**
     * 更新文章
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async updateArticle(ctx) {
        const id = ctx.params.id;
        const articleData = ctx.request.body
        if (id && articleData) {
            let update = {
                id: ctx.params.id,
                data: {...articleData}
            }
            await ArticleModel.updateArticle(update.id, update.data);
            let data = await ArticleModel.getArticleDetail(update.id);
            ctx.body = {
                code: 200,
                data: data,
                message: '更新成功'
            }
        } else {
            ctx.body = {
                code: -1,
                message: '更新失败'
            }
        }
    }
}

module.exports = ArticleController;