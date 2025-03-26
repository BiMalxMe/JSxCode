//.length1
// function getlemgth(str){
//     console.log("Original string is : ",str);
//     console.log("Original string is : ",str.length);
// }
// getlemgth("bimalchalise")



//INdex of
// function getlemgth(str,target){
//     console.log("Original string is : ",str);
//     console.log("INdex : "+str.indexOf(target));
// }

// getlemgth("THE ANT MAN AND QUANTAMMANIA","AND");



//If indexOf doesnot finds the target it returns -1
//Also----lastindexOf----If repetitive
// function getlemgth(str,target){
//     console.log("Original string is : ",str);
//     console.log("INdex : "+str.lastIndexOf(target));
// }

// getlemgth("THE ANT MAN AND QUANTAMMANIA AND","AND");




//Slicing of a string

// function getSlice(str,start,end){
//     console.log("Original string is : ",str);
//     console.log("Sliced String is "+str.slice(start,end));
// }

// getSlice("THE ANT MAN AND QUANTAMMANIA",0,14);

//substr
// let Naam="Permutation And Combination";
// console.log(Naam.substr(2,5));//substr(start,lengthfromstart)
// console.log(Naam.slice(2,5));


// //replace
// function Replacing(str,oldstr,newstr){
// console.log(str.replace(oldstr,newstr));
// }
// Replacing("Hey its kristi",'kristi','Dipti');



//split(seperator)
// function spliting(str,seperator){
// console.log(str.split(seperator));//spliting by Blankspace----Gives value in array
// }
// spliting("THOR HULK CAPTAIN_AMERICA IRONMAN"," ");



//trim()
// const str='              Hey its good to acomodate with you                                        ';
// console.log(str.trim());


//Toupper and tolower

const str="biMal";
console.log(str.toUpperCase());
console.log(str.toLowerCase());
