Command to run the project

```sh
npm install
npm run start:dev:all
```

When the application is started open your Rest client on the address like the following

```sh
https://localhost:3001/articles # Has error because findAll method is called with @GrpcCallStream
https://localhost:3001/articles/1 # ok because findOne method use @GrpcMethod
https://localhost:3001/users # ok because findOne method use @GrpcMethod
https://localhost:3001/users/1 # ok because findOne method use @GrpcMethod
```
