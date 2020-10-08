// console.log('eat')
/* setTimeout function takes a callback */
// setTimeout(() => {
//     console.log('code')
// }, 3000);

// console.log('sleep')


/* map function - taking a callback */
// const items = [2, 3, 4, 5]

// const haveItems = items.map(item => `I have ${item}`)

// console.log(haveItems)


/* named function */
// const greet = name => console.log(`Hello ${name}`)

// const userInfo = (firstname, lastname, callback) => {
//     const fullName = `${firstname} ${lastname}`
//     callback(fullName)
// }

// userInfo('John', "Doe", greet)


// const meetingDetails = {
//     name: 'Marketing Meeting',
//     location: 'Skype',
//     time: '1:00pm'
// }
// const hasMeeting = false

// const meeting = new Promise((resolve, reject) => {
//     if(!hasMeeting) {
//        resolve(meetingDetails)
//     } else {
//         reject(new Error('No schedule for meeting'))
//     }
// })


// const addToCalendar = meetingDetails => {
//     return new Promise((resolve, reject) => {
//         const calendar = `${meetingDetails.name} is scheduled at ${meetingDetails.time} on ${meetingDetails.location}`;
//         resolve(calendar)
//     })
// }
// const addToCalendar = meetingDetails => {
//         const calendar = `${meetingDetails.name} is scheduled at ${meetingDetails.time} on ${meetingDetails.location}`;
//         return Promise.resolve(calendar)
// }

// meeting
//  .then(addToCalendar)
//  .then(result => console.log(result))
//  .catch(err => console.log('Error:', err.message))

// const isAwake = true
// const wake = new Promise((resolve, reject) => {
//     if(isAwake)
//     {
//         resolve({
//             msg: "I already awoken"
//         })
//     } else {
//         reject(new Error('still sleeping'))
//     }
// })

// const isHungry = false
// const eat = new Promise((resolve, reject) => {
//     if(!isHungry) {
//         resolve({
//             msg: "get to eat"
//         })
//     } else {
//         reject(new Error('not hungry'))
//     }
// })

// wake.then(res => console.log(res))
// eat.then(res => console.log(res))

// Promise.all([wake, eat]).then(res => console.log(res))
// Promise.race([wake, eat]).then(res => console.log(res))

// const meetingDetails = {
//     name: 'Marketing Meeting',
//     location: 'Skype',
//     time: '1:00pm'
// }
// const hasMeeting = true

// const meeting = new Promise((resolve, reject) => {
//     if(!hasMeeting) {
//        resolve(meetingDetails)
//     } else {
//         reject(new Error('No schedule for meeting'))
//     }
// })

// const addToCalendar = meetingDetails => {
//         const calendar = `${meetingDetails.name} is scheduled at ${meetingDetails.time} on ${meetingDetails.location}`;
//         return Promise.resolve(calendar)
// }

// async function myMeeting() {
//     try {
//         const meet = await meeting;
//         const msg = await addToCalendar(meet)
//         console.log(msg)
//     } catch(err) {
//         console.log(err.message)
//     }
// }
//  myMeeting();
// // myMeeting().catch(err => console.log(err.message+"!"))


// const posts = [
//     {title: 'title1', body: 'post one'},
//     {title: 'title2', body: 'post two'},
//     {title: 'title3', body: 'post three'},
// ]

// function getPosts() {
//     setTimeout(() => {
//         let output = ``
//         posts.forEach(post => output += `<li>${post.title}</li>`)
//         document.body.innerHTML = output;
//     }, 1000);
// }


// function createPost(post, callback) {
//     setTimeout(() => {
//         posts.push(post)
//         callback()
//     }, 1000);
// }

// createPost({title: `title4`, body: `post four`}, getPosts)


// function printString(string) {
//     setTimeout(() => {
//         console.log(string)
//     }, Math.floor(Math.random() * 100) + 1);
// }

// function printAll() {
//     printString("A")
//     printString("B")
//     printString("C")
// }

// printAll()

// function printString(string, callback) {
//     setTimeout(() => {
//         console.log(string)
//         callback()
//     }, Math.floor(Math.random() * 100) + 1);
// }

// function printAll() {
//     printString("A", () => {
//         printString("B", () => {
//             printString("C", () => {})
//         })
//     })
// }

// printAll()

/*
The problem with callbacks is it creates something called “Callback Hell.” Basically, you start nesting functions within functions within functions, and it starts to get really hard to read the code.
*/

// Promises
// function printString(string) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(string)
//             resolve()
//         }, Math.floor(Math.random() * 100) + 1);
//     })
// }

// function printAll() {
//     printString("A")
//         .then(() => printString("B"))
//         .then(() => printString("C"))
// }

// printAll()

/*
This is called a Promise Chain. You can see that the code returns the result of the function (which will be a Promise), and this gets sent to the next function in the chain.

The code is no longer nested but it still looks messy!
*/


/*
Await

Await is basically syntactic sugar for Promises. It makes your asynchronous code look more like synchronous/procedural code, which is easier for humans to understand.
*/

// async function printAll() {
//     await printString("A")
//     await printString("B")
//     await printString("C")
// }

// printAll()


/**
 * 
 You might notice that we use the “async” keyword for the wrapper function printAll. This let’s JavaScript know that we are using async/await syntax, and is necessary if you want to use Await. This means you can’t use Await at the global level; it always needs a wrapper function. Most JavaScript code runs inside a function, so this isn’t a big deal.
 */


//  callback
// function addString(previous, current, callback) {
//     setTimeout(() => {
//         callback(previous + ' ' + current)
//     }, Math.floor(Math.random() * 100) + 1);
// }


// function addAll() {
//     addString(' ', 'A', (result) => {
//         addString(result, 'B', (result) => {
//             addString(result, 'C', (result) => {
//                 console.log(result)
//             })
//         })
//     })
// }

// addAll()

// promises
// function addString(previous, current) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(previous + ' ' + current)
//         }, Math.floor(Math.random() * 100) + 1);
//     })
// }


// function addAll() {
//     addString(' ', 'A')
//      .then(result => addString(result, 'B'))
//      .then(result => addString(result, 'C'))
//      .then(result =>console.log(result))
// }

// addAll()

// await

// async function addAll() {
//     let result = await addString(' ', 'A')
//     result = await addString(result, 'B')
//     result = await addString(result, 'C')
//     console.log(result)
// }

// addAll()

// // :)

// don't use arrow function as object method
// const cat = {
//     lives: 10,
//     jumps: function () {
//         this.lives--;
//     }
// }

// cat.jumps()
// console.log(cat.lives)

// ES5
var obj = {
    id: 42,
    counter: function counter() {
        setTimeout(function() {
        console.log(this.id);
        }.bind(this), 1000);
    }
};

obj.counter()

// ES6
var obj = {
    id: 42,
    counter: function counter() {
        setTimeout(() => {
        console.log(this.id);
        }, 1000);
    }
};

obj.counter()

//type error
// var button = document.getElementById('press');
// button.addEventListener('click', () => {
//   this.classList.toggle('on');
// });

// no error
var button = document.getElementById('press');
button.addEventListener('click', function () {
  this.classList.toggle('on');
});
