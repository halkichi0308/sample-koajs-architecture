import "reflect-metadata"; // this shim is required
import {createKoaServer} from "routing-controllers";
import {UserController} from "@controllers/UserController";
//import {UserController} from "@controllers/JsonController";
import {getLibs} from "@lib/lib";
//import {IndexController} from '@routes/routes'

// creates koa app, registers all controller routes and returns you koa app instance
const app = createKoaServer({
   controllers: [UserController], // we specify controllers we want to use
});

// run koa application on port 3000
app.listen(3000);