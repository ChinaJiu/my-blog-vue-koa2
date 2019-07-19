const { exec } = require('../db/mysql')

const getList = async (author, keyword) => {
  let sql = ' select * from press where 1=1 '
  if (author) {
    sql += `and author='${author}' `
  }
  if (keyword) {
    sql += `and title like '%${keyword}%' `
  }
  sql += `order by id desc`
  let list = await exec(sql)
  console.log(list)
  return list;
}

const getDetail = async (id) => {
  let sql = `select * from blogs where id='${id}'`
  let rows = await exec(sql);
  return rows[0] || {}
}

const newBlog = async (blogData = {}) => {
  const title = blogData.title
  const content = blogData.content
  const author = blogData.author
  const createTime = Date.now()
  let sql = `
    insert into blogs (title, content, createtime, author)
    values ('${title}', '${content}', '${createTime}', '${author}');
  `
  let insertData = await exec(sql);
  return {
    id: insertData.insertId
  }
}

const updateBlog = async (id, blogData = {}) => {
  const title = blogData.title
  const content = blogData.content
  let sql = `
    update blogs set title='${title}', content='${content}' where id='${id}'
  `
  let data = await exec(sql)
  if(data.affectedRows > 0) {
    return true;
  }
  return false;
}

const delBlog = async (id, author) => {
  let sql = `
    delete from blogs where id='${id}' and author='${author}'
  `
  let data = await exec(sql);
  if(data.affectedRows > 0) {
    return true
  }
  return false

}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
}