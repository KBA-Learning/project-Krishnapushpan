import express,{json} from 'express';
import { userroute } from './routes/userroute.js';
import { adminroute } from './routes/adminroute.js';
import cookieParser from "cookie-parser";
const app=express();

app.use(json());
app.use(cookieParser());
app.use('/',userroute)
app.use('/',adminroute)

const port =process.env.port;
app.listen(port,()=>{
    console.log(`server is listening to ${port}`)
})