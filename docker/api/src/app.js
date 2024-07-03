const express = require('express');
const mongoose = require('mongoose');
const schema = mongoose.Schema;

const compteurSchema = new schema({count : Number });
const Compteur = mongoose.model('compteur', compteurSchema, 'compteur');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://mongoUser:monSuperPassword@mongodb:27017/test');
  console.info("Connected");
}

const app = express();
app.use(express.json());

app.get('/*', async (req, res) => {
  const val = await Compteur.findOneAndUpdate({ $inc: { count:1 } });
  console.info("val=", val);
  //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.status(200).json(val);
});

app.listen(80);