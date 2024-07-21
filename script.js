// let name = prompt('What is your name')

let rock = document.getElementById ('R').value
let paper = document.getElementById('P').value
let scissors = document.getElementById('S').value


let userChoice = [rock, paper, scissors];
let userValue;
let Rbtn = document.querySelector('button#R')
let Pbtn = document.querySelector('button#P')
let Sbtn = document.querySelector('button#S')

Rbtn.addEventListener('click', function () {
    console.log('rock');
})



//creating computer choice

let compChoice = Math.floor(Math.random() * 3)

let compVal ;

function gettingCompVal() {

    if (compChoice === 0) {
        compVal = "rock";
        return compVal
    
    } else if (compChoice === 1) {
    
        compVal = "paper";
        return compVal
    
    } else if (compChoice === 2) {
    
        compVal = 'scissors'
        return compVal
    
    } else {
    
        compVal = 'none'
        return compVal
    
    }

}


// console.log(compVal)



// comparing values

const compare = (choice1,choice2) => {
    if(choice1 === choice2) {

        // return `It's a Tie`;
        console.log(`It's a Tie`);


    } else if(choice1 === "rock" && choice2 === "paper" ||  choice1 === "paper" && choice2 === "rock" ) {

        // return `paper defeats rock`;
        console.log(`paper defeats rock`);

    } else if(choice1 === "paper" && choice2 === "scissors" || choice1 === "scissors" && choice2 === "paper" ) {


        // return `scissors defeat paper`;
        console.log(`scissors defeat paper`);

    } else if (choice1 === "scissors" && choice2 === "rock" || choice1 === "rock" && choice2 === "scissors" ) {


        // return `rock defeats scissors`;
        console.log(`rock defeats scissors`);

    }
}

// Rules list

let rules = [
    `Don't cheat`,
    `Don't use console`,
    `subscribe to my channel`
]

// selecting tags
    let selectTag = document.querySelector('select')
    let h2Element = document.createElement('h2')
    h2Element.innerHTML = 'Rules';
    document.body.appendChild(h2Element)
    let olElement = document.createElement('ol')
    h2Element.insertAdjacentElement('afterend', olElement)

// defining a function for displaying rules list

    rules.forEach(function(elements) {
        let li = document.createElement('li');
        li.innerHTML = `<b> ${elements} </b>`;
        olElement.appendChild(li)
    })


// adding button and event on button  

    // let btn = document.querySelector('#btn')
 


    // btn.addEventListener('click', function(value) {

    //     let x = document.getElementById("RPS").selectedIndex;
    //     userValue = document.getElementsByTagName("option")[x].value
        
    //     return compare(userValue,compVal)

    // })




    // compare(compVal,userValue)


    // let sum;

    // function add(num1,num2) {
    //     sum = num1 + num2
    //     result(sum)
    // }

    // function result() {
    //     console.log(sum);
    // }

    // add(4,5)

    
    /* fuck fuck fuck fuuuuuuuuuuckkkkkkk fuck fuck fuuuucccccckk fuck fuck */

    let themeButton = document.querySelector('button#theme')

    themeButton.addEventListener('click',function(value) {

        document.body.classList.toggle('dark')

    })
    







    
    

