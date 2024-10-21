// GENERAL TO DO LIST:
// (1.) Methods being used: (push), (pop), (toString), (join), (concat)
// (2.) Create an array -
// Push -
// pop -
// ToString
// join
// concat 

// ARRAY

var names = ["harry-potter", "draco-malfoy", "ron-weasly"];
var numbers = ["17", "18", "19"]



// PUSH: Example:
// names.push("chloe-faith")

// push ("chloe-faith");

// function push(word){
//     names[names.length] = word;

//     console.log (names)
// }



// Pop: Example:
// names.pop();
//     pop (names);
// function pop(word){
//     var poppedNum = names[names.length-1];

//     console.log (poppedNum)

//     word.length=word.length-1;
// }


// ToSting: Example:
// var stringNames = names.toString();

// toString (5)

// function toString(word){
//     var string = "";
//     string += word;

//     console.log (string)  
// }



// concat: Example:
// var newArray = names.concat(numbers);

// concatList (names, numbers);


// function concatList(arrayOne, arrayTwo){
//     var array=[];
//     for(var i=0; i < arrayOne.length; i++){
//         array += arrayOne[i] + " ";
//     }
//     for(var i=0; i<arrayTwo.length; i++){
//         array += arrayTwo[i];
//     }
//     console.log (array)
// }


// Join: Example:
// var arrayElements = names.join("/")

join (names, numbers);

function join(array, separator){
    var separated ="";

    for(i = 0; i < array.length; i++){
        separated += array[i] + " /";
        if(i !== array.length-1){
            separated += separator + " /";
        }
    
    }
    console.log (separated)
}


// console.log (newArray);