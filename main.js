
let userInput= prompt (`Press 1. To list English to Spanish translation
Press 2. To list all Spanish to English Translation  Press 3. To Enter a new English Translation
 Press 4. To enter a New Spanish Translation Press q to quit`);

let englishArray=["One","two","three","red","blue","green"];
let spanishArray = ["uno","dos","tres","rojo","azul","verde"];


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
englishTranslation();
}
if(userInput==="4")
{
spanishTranslation();


}
else if (userInput==="q");

///////////////////////////////////////////////////

// Functions start HERE::::////////////



//translate english to spanish
function englishTranslation()
{
    let userInput2 = prompt("Enter English word");
    let userInput3 = prompt("Enter that word in spanish:");
    while(userInput2!=="q" && userInput3!=="q")
    {
        englishArray.push(userInput2);
        spanishArray.push(userInput3);
        for (i = 0; i < englishArray.length; i++)
        {
            console.log(`The english ${englishArray[i]} is ${spanishArray[i]}  in spanish`)
        }
        userInput2=prompt("Enter English Word");
        userInput3=prompt("Enter spanish Word")
    }
}


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

// translate spanish to english
function spanishTranslation()
{

    let userInput4 = prompt("Enter SPANISH word");
    let userInput5 = prompt("Enter that word in eNGLISH:");
    while(userInput4!=='q'&& userInput5!=='q')
    {
        englishArray.push(userInput5);
        spanishArray.push(userInput4);
        for (i = 0; i < spanishArray.length; i++)
        {
            console.log(`The spanish word ${spanishArray[i]} is ${englishArray[i]}  in english`)
        }
        userInput4=prompt("Enter spanish word");
        userInput5=prompt("Enter that word in english");
    }
}