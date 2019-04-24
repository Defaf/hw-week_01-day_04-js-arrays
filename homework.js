/*
1. Create a function that will get the sum of the numbers 
between 1 and n and return the answer 
*/
const summation = function (num){
    let rangNum=" " ;
    let result= 0 ; 
    if(isNaN(num)){
        console.log("Error !! " + num + " is not a number ");
    }else{
        for(let i = 1 ; i <=num ; i++){
            rangNum += i + " + " ; 
            result += i;
        }
    console.log ("The numbers are " + rangNum + " the result is "+ result);
    } 
}
summation(5); 


/* 
2. Create a program to get the sum of all the even numbers in a group 
*/
const arraySum = function (arr){
    let sum = 0 ;
	for(let i = 0 ;  i<arr.length ; i++ ){
        if(arr[i] %2 === 0  ){
			sum += arr[i] ; 
            console.log ("the even numbers are: "+ arr[i]  );
  		 }//end if 
	}//end for loop
    console.log ( "and the sum of it's " + sum );
}//end function 
arraySum([2,4,3,6,7,9]);


/*
3. Create a function to get the average of a group of numbers 
*/
const average = function (arr){
	let avg  ;
	let count = 0 ;
    for(let i = 0 ; i < arr.length ; i++ ){
		count += arr[i];
		avg = count/arr.length ;
    }//end for loop 
console.log ("The average is: " + avg ); 
}// end average function 
average([8, 2, 2, 4]) ; 


/*
4. Create a function to reverse the letters in a word 
*/
const reverse = function (word){
    let str = word.split("") ; 
    let reverString  = str.reverse();
    let strJoin = reverString.join("");
    console.log(strJoin) ;
}//end reverse function 
reverse("caterpillar");


/*
5. Create a function that takes an array 
of words and combines them with a dash 
*/
const addDashes = function (array){
    let joinTxt = array.join(" -") ;
    console.log( joinTxt );
}
addDashes(['test1', 'test2', 'test3']);

/*
6. Function that will count up to a number and 
back down and return a string of the climb 
*/

const countUpAndDown = function (num){
    if(isNaN(num)){
        console.log("Error !! " + num + " is not a number ");
    }else{
        for(let i = 0 ; i <=num ; i++){
            console.log(i);
        }
        for(let j = num-1 ; j >= 0 ; j--){
           console.log(j);
        }
    }
}//end countUpAndDown function 
countUpAndDown(3);
  

/*
7. Write a function that will tell you all of the 
words in an array that contain the letter `a` 
*/
const wordsWithA = function (array){
    for(let i = 0 ; i < array.length ; i++){
		if(array[i].indexOf("a") !=-1 ){
			console.log(array[i] + " ")
			}
    }//end for loop
}//end function 
wordsWithA(['cat', 'rabbit', 'dog', 'frog']) 


/*
8. Write a function that will tell you all of the words 
in an array that contain a specified letter 
*/
const wordsWithLetter = function (letter , array){
    for(let i = 0 ; i < array.length ; i++){
		if(array[i].indexOf(letter) !=-1 ){
			console.log (array[i] + " ")
		}//end if 
    }//end for loop
}//end wordsWithLetter function 
wordsWithLetter("g", ['cat', 'rabbit', 'dog', 'frog']);

/*
9. Function that returns the longest word in sentence 
*/
const longestWord = function(str){
    let longStr = 0 ; 
    let word = null ; 
    let txtSplit = str.split(" ");
    for(let i = 0 ; i < txtSplit.length ; i++){
     if(txtSplit[i].length > longStr ){
       longStr = txtSplit[i].length;
       word = txtSplit[i];
           }
      }
    console.log ("the longest words is: " +word);
}//end longestWord function 
longestWord("The cat in the house");


/*
10. Function that returns the largest even number 
*/
const largestEvenNumber = function (array){
    let maxNum = 0;
    for(let i = 0 ; i <array.length ; i++){
        if(array[i] %2 === 0 ){
            console.log( array[i] + " is an even number " );
            if(array[i] > maxNum ){
                maxNum = array[i];
            }
        }//end if
    } // ed for loop
console.log ("the largest number is: " +maxNum);
}//end largestEvenNumber function 
largestEvenNumber([1,2,3,10,4,7,0]);


/*
Extra Practice
Create word guessing game where the user gets infinite tries to guess 
the word (like Hangman without the hangman, or like Wheel of Fortune 
without the wheel and fortune).
*/
