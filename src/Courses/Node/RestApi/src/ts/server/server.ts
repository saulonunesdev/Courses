import * as restify from 'restify';
import * as mongoose from 'mongoose';

import {environment} from '../common/environment';
import {Routes} from '../common/routes';
import {mergePatchBodyParser} from './plugins/merge-patch.parser';
import {handleError} from './error.handler';

export class Server {

    application: restify.Server;

    initializeDB() {
        (<any>mongoose).Promise = global.Promise;
        return mongoose.connect(environment.db.url, {
            useNewUrlParser: true
        });
    };

    initRoutes(routes: Routes[]): Promise<any> {
        return new Promise((resolve, reject) => {
            try {

                this.application = restify.createServer ({
                    name: 'RestApi',
                    version: '1.0.0'
                });
                
                this.application.use(restify.plugins.queryParser());
                this.application.use(restify.plugins.bodyParser());
                this.application.use(mergePatchBodyParser);

                //Routes
                for  (let route of routes) {
                    route.applyRoutes(this.application);
                }

                this.application.listen(environment.server.port, () => {
                    resolve(this.application);
                });

                this.application.on('restifyError', handleError);

            } catch(error) {
                reject(error);
            }
        });
    };

    bootstrap(routes: Routes[] = []): Promise<Server> {
        return this.initializeDB().then(() =>
               this.initRoutes(routes).then(() => this)
        )
    };

};