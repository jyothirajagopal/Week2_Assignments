let string1= "listen"
let string2= "silent"

console.log(isAnagram());


function isAnagram()
{

 string1 = string1.trim().toUpperCase().split("")
 string2 = string2.trim().toUpperCase().split("")

 console.log("Upper Case Strings " + string1, string2) 
 //sorting of first string
 for ( let i=0; i<string1.length;i++)
     {
        for(let j=i+1;j<string1.length;j++)
            {
           if (string1[i] > string1[j])
            {
        let temp = string1[i] ;
        string1[i] =string1[j]
        string1[j]= temp
            }
        }
        
    }


    console.log(`First String after sorting ${string1}`);

//sorting of second string


for ( let i=0; i<string2.length;i++)
    {
       for(let j=i+1;j<string2.length;j++)
           {
          if (string2[i] > string2[j])
           {
       let temp = string2[i] ;
       string2[i] =string2[j]
       string2[j]= temp
           }
       }
       
   }


   console.log(`First String after sorting ${string2}`);

   let sortedString1 = string1.join('')
   let sortedString2 = string2.join('')

   if(sortedString1===sortedString2)
       return("String is Anagram")
    else
    return("String is not an Anagram")
    


}