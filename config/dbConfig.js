const mysql = require('mysql')
// const connection = mysql.createConnection()

// const config = {
//     host: 'localhost',
//     user: 'root',
//     port: '3306',
//     password: '19931017zt',
//     database: 'yezi'
// }
module.exports = {
    config: {
        host: 'localhost',
        user: 'root',
        port: '3306',
        password: '19931017zt',
        database: 'yezi'
    },
    sqlConnect: function (sql, sqlArr, callback) {
        var pool = mysql.createPool(this.config)
        pool.getConnection((err, conn) => {
            console.info('connect...')
            if (err) {
                console.info('连接失败', err)
                return
            }
            conn.query(sql, sqlArr, callback)
            conn.release()
        })
    }
}
// connection.connect((err) => {
//     if (err) { console.log("连接失败", err) }
//     else { console.log("连接成功") }
// })

// connection.query('SELECT * FROM `user_info`;', function(error, results, fields) {
//     console.info(results)
// })

// connection.end()