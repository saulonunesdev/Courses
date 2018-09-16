import * as restify from 'restify'
import {environment} from '../common/environment'
import {Router} from '../common/router'

export class Server {

    application: restify.Server

    initRoutes(routers: Router[]): Promise<any>{
        return new Promise((resolve, reject) => {
            try{

                this.application = restify.createServer({
                    name: 'meat-api',
                    version: '1.0.0'
                })

                this.application.use(restify.plugins.queryParser())                

                //Routes
                for (let router of routers) {
                    router.applyRoutes(this.application)
                }

                /*
                //http://localhost:3000/info?name=teste&age=32
                this.application.get('/info', [
                    (req,res,next)=>{
                        if(req.userAgent() && req.userAgent().includes('MSIE 7.0')){
                            let error: any = new Error()
                            error.statusCode = 400
                            error.message = 'Please, Update your Browser'
                            return next(error)
                        }
                        return next()
                },(req,res,next)=>{
                    res.json({
                        browser: req.userAgent(),
                        method: req.method,
                        url: req.href(),
                        path: req.path(),
                        query: req.query
                    })
                    return next()
                }]) 
                */

                this.application.listen(environment.server.port, ()=>{
                    resolve(this.application)
                    //console.log('Api is running on http://localhost:3000')
                })

            }catch(error){
                reject(error)
            }
        })
    }

    bootstrap(routers: Router[] = []): Promise<Server>{
        return this.initRoutes(routers).then(() => this)
    }
}