const dbConfig = require('../config/dbConfig')
// 获取指定分类的文章列表
getPosts = (req, res) => {
    const sql = 'select * from blog_info'
    const sqlArr = []
    const callback = (err, data) => {
        if (err) {
            console.info('连接出错啦')
        } else {
            res.send({
                'data': data
            })
        }
    }

    dbConfig.sqlConnect(sql, sqlArr, callback)
}

getPostsByUserId = (req, res) => {
    const { id } = res.query
    const sql = 'select * from blog_info where author?'
    const sqlArr = [id]
    const callback = (err, data) => {
        if (err) {
            console.info('连接出错啦')
        } else {
            res.send({
                'data': data
            })
        }
    }

    dbConfig.sqlConnect(sql, sqlArr, callback)
}

module.exports = {
    getPosts
}