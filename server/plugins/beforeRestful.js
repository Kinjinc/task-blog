const sequelize = require('../sequelize/sequelize.js')
const models = require('../sequelize/models.js')
const Co = require('co')
const Log = require('../utils/log.js')

    Co(function* (){
       let count = yield models.User.count()
       if(count ===0){
        sequelize.sync().then(() => {
            return models.User.create({
              username: 'admin',
              password: '123',
              email: '123@qq.com'
            })
        })
       }
    })




    // models.User.count().then( count =>{
    // if(count === 0){
    //    sequelize.sync().then(() => {
    //         return models.User.create({
    //           username: 'admin',
    //           password: '123',
    //           email: '123@qq.com'
    //         })
    //     })
    // }
    // })
