import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import { userRouter } from './routes/users.js' //.js because import notation
import { recipesRouter } from './routes/recipes.js';

const app = express()

app.use(express.json())
app.use(cors())

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

mongoose.connect("mongodb+srv://triss:password1234@recipes.vnwjaay.mongodb.net/recipes?retryWrites=true&w=majority")

app.listen(3001, () => console.log("SERVER STARTED!")) //node src/injex.js
//  "scripts": {
//    "start": "nodemon src/index.js"
//  },
//yard start

