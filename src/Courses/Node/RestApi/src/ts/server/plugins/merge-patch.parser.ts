import * as restify from 'restify';

const mpContentType = 'application/merge-patch+json';

export const mergePatchBodyParser = (req: restify.Request, resp: restify.Response, next: restify.Next) => {
    if (req.contentType() === mpContentType && req.method === 'PATCH') {
        (<any>req).rawBody = req.body;
        try{
            req.body = JSON.parse(req.body);
        } catch(e){
            return next(new Error(`Invalid Content: ${e.message}`))
        }
    }
    return next();
}