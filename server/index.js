import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';

import postRoutes from "./routes/posts";

const app = express();

//Routes:
app.use('/posts', postRoutes);

app.use(bodyParser.json({limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

const CONNECTION_URL =
	'mongodb+srv://testUser:test123123@cluster0.anhqq.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose
	.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTipology: true })
	.then(() =>
		app.listen(PORT, () => console.log(`Server running on Port: ${PORT}`)))
	.catch((error) => console.log(error.message));
mongoose.set('useFindAndModify', false);



