
const string = ` fly me to the moon  `
const s1 = string.trim();

//function to calcualte wordlength
function wordLength(){
    //splitting the string into array
const s = s1.split(" ");
   //calculating array length
const arrayLen = s.length

  //printing last word in the array with length
console.log (`Length of last word ${s[arrayLen-1]}  in the array is ${s[arrayLen-1].length}`)

}

wordLength();// function invoke