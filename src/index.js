import dotenv from 'dotenv';
import data from '../dataCombined.json';
import brain from 'brain.js';
dotenv.config();

const network = new brain.recurrent.LSTM();

const trainingData = data.map(item => ({
    input: item.text,
    output: item.user
}));

console.log("Training....");
network.train(trainingData);

console.log("RUNNING!");
const output = network.run('FAKENEWS');

console.log(`Quem disse isso: ${output}`);