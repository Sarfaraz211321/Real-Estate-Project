import express from 'express';
import fileUpload from 'express-fileupload';
import { dbConnect } from './config/db.js';
import router from './route/userRoute.js';
import adminRouter from './route/adminRoute.js';
import cors from 'cors';
const app = express();
app.use(express.json());
app.use(fileUpload());
app.use(cors());
const PORT = 3000;
dbConnect();
app.use('/img',express.static('uploads'));
app.use('/api', router);
app.use('/api', adminRouter);
app.listen(PORT, () => {
    console.log("server running......");
})