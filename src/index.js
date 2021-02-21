import getSettings from './components/getSettings.js';
import './scss/index.scss';
import img from '/src/images/car.jpg';



console.log('Hello World')
getSettings()

const obj = { a: 'alpha', b: 'bravo' }
const newObj = { ...obj, c: 'charlie' }

console.log(newObj)



// ASYNC
async function foo() {
    console.log('async working!')
  }
  
  async function bar() {
    await foo()
    console.log('after foo')
  }
  
  bar()