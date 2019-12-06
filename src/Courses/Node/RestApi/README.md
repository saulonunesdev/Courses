## Mongod Start

```
    mongod --dbpath=./src/data/db
    mongod --dbpath=D:\\Mongo\\data\\db    
```

## Mongo Commands

```
    mongo                     | Connects to the MONGOD Service via Shell
    db                        | ShowDB
    use db                    | Switch and/or Create a New DB
    var                       | Create a JSON Var
    db.X.insert(var)          | Create if not exists a new collection and insert data
    db.X.find()               | Select ALL in Collection
    db.X.find({a: 'b'})       | Select in X where a === b
    db.X.findOne()            | Select First Object 
    db.X.findOne({a: 'b'})    | Select First Object in X where a === b    
    ObjectId()                | Creates Random _id
    db.X.remove({})           | Remove ALL in Collection
    db.X.remove({a: 'b'})     | Remove in X where a === b

    ALTER DATA 
    var USERX = db.X.findOne({a: 'b'})
    USERX.property   = 'newdata'
    USERX.Newproperty = 'data'
    db.X.update({_id: USERX._id}, USERX) 
    db.X.update({_id: USERX._id}, {"$set": {property: 'alterdata'}})
```

## Dev Commands

* Typescript Watch

```
    npm install -g typescript
    tsc -w
```

* Node Watch

```
    npm install -g nodemon
    nodemon dist/main.js
```


## Test

* Info GET

    http://localhost:3000/info?test=new

* Users GET
    http://localhost:3000/users
    http://localhost:3000/users/1