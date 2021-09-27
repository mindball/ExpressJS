# Introduction to Node.js
## NPM
### npm init
```
npm init is a convenient way of scaffolding your package.json; 
you may need to run it everytime you are starting a new project.
```
### npm install
```
installs your dependencies in node_modules folder. 
You may need to run this everytime you manually add a dependency to your package.
And you should only have to run npm install when you first set up a project for local development, 
or when changes are made to the project's dependencies.
```
### npm start
```
npm start is a script that should be defined in your package.json, and you will likely need to run that every time 
you begin local development on your project.
```

## Using Modules
```
Making Our App Modular. Modules are used with "require“
Using Modules. Can be required with a file system semantics. When required the file extension is not needed
```


## Working with cluster
[Cluster examples](https://www.sitepoint.com/how-to-create-a-node-js-cluster-for-speeding-up-your-apps/)

## Why node.js
> Perfect for microservices
> Node.js is written in JavaScript
> Full control of the server capabilities
> Asynchronous and fast, one of the fastest web servers

## Streams
```
JS is unicode friendly, but not the best when it comes to binary data
Can be easily transformed into JS object by setting an encoding
in the buffer’s toString() method
```

> Readable
> Writeable
> Duplex - both Readable and Writeable (tcp sockets)
> Transform -Duplex streams where the output is computed from the input (zlib, crypto)

```
HTTP Request is a readable stream
HTTP Response is a writeable stream
```



## Asynchronous Code
```
The function callback is the last parameter in the async call.
Error is the first parameter in the callback
Always check errors and handle them correctly!
```

