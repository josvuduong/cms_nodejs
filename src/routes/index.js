const noticeRouter = require('./notice');

function routes(app){
    app.get('/',(req,res)=>{
        res.send('Home');
    });

    app.use('/notice',noticeRouter)

}

module.exports = routes;