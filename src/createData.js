import dotenv from 'dotenv';
import fs from 'fs';
import bolsonaro from '../bolsonaro.json';
import rosario from '../rosario.json';

dotenv.config();

const data = [...bolsonaro.results, ...rosario.results];

const filteredData = data.map(tweet => {
    const text = tweet.extended_tweet && tweet.extended_tweet.full_text || tweet.text
    return {text: text, user: tweet.user.name}
});

fs.writeFile('dataCombined.json', JSON.stringify(filteredData), err => {
    if(err) console.log(err);
    console.log('Crioooou!');
})
