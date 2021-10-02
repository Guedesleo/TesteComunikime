import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

export default  {
    storage: multer.diskStorage({
        destination : path.resolve(__dirname ,'..','uploads'),
        filename(resquest , file ,callback) { 
             const hash = crypto.randomBytes(6).toString('hex');

             const filmeName = `${hash}-${file.originalname}`;
             callback( null , filmeName);
        },
    }),
}