const dbConfig = require('../config/dbConfig')
// 获取 用户列表
getUsers = (req, res) => {
    const sql = 'select * from user_info'
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

module.exports = {
    getUsers
}