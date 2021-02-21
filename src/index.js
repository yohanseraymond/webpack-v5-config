import getSettings from './getSettings.js';
import './scss/index.scss';


console.log('Hello World')
getSettings()

const obj = { a: 'alpha', b: 'bravo' }
const newObj = { ...obj, c: 'charlie' }

console.log(newObj)
