const string = `Hello World jyothilekshmi`

//function to calcualte wordlength
function wordLength(){
    //splitting the string into array
const s = string.split(" ");
   //calculating array length
const arrayLen = s.length

  //printing last word in the array with length
console.log (`Length of last word ${s[arrayLen-1]}  in the array is ${s[arrayLen-1].length}`)

}

wordLength();// function invoke
