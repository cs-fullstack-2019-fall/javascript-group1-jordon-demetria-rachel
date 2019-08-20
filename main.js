
let userInput= prompt (`Press 1. To list English to Spanish translation
Press 2. To list all Spanish to English Translation  Press 3. To Enter a new English Translation
 Press 4. To enter a New Spanish Translation Press q to quit`);

let englishArray=["One","two","three","red","blue","green"];
let spanishArray = ["uno","dos","tres","rojo","azul","verde"];
//let userInput= prompt("Enter Spanish words");
spanishArray.push(userInput);

//console.log (spanishArray);
if (userInput==="1")
{
  EnglishtoSpanish();
}


if(userInput==="2")
{
SpanishtoEnglish();
}

if(userInput==="3")
{

}
if(userInput==="4")
{

}
else if (userInput==="q");





// Function to log english to spanish words.
function EnglishtoSpanish() {
    for(i=0;i<englishArray.length;i++)
    {
        console.log(`The english word ${englishArray[i]} is ${spanishArray[i]}  in spanish`)
    }

}

// Function to log spanish to english words.

function SpanishtoEnglish(){
    for(i=0;i<spanishArray.length;i++)
    {
        console.log(`The spanish word ${spanishArray[i]} is ${englishArray[i]} in english`)
    }
}