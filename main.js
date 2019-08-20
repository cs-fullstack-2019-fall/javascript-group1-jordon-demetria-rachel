
let userInput= prompt (`Press 1. To list English to Spanish translation
Press 2. To list all Spanish to English Translation  Press 3. To Enter a new English Translation
 Press 4. To enter a New Spanish Translation Press q to quit`);

//let englishArray=["One","two","three","red","blue","green"];
let spanishArray = ["uno,""dos,tres","rojo","azul","verde"];
let userInput= prompt("Enter Spanish words");
spanishArray.push(userInput);
let englishArray=["One","two","three","red","blue","green"];
let newspanishArray=[];
let newEnglishArray=[];



if (userInput==="1")
{
   
    for(i=0;i<newEnglishArray.length;i++)
    {
        console.log(`The english ${newEnglishArray[i]} is ${spanishArray[i]}  in spanish`)
    }
}

if(userInput==="2")
{

}

if(userInput==="3")
{
englishTranslation();
}
if(userInput==="4")
{

}
else if (userInput==="q");


function englishTranslation(){

    let userInput2= prompt("Enter English word");
    let userInput3=prompt("Enter that word in spanish:");
    newEnglishArray.push(userInput2);
    newspanishArray.push(userInput3);
    for(i=0;i<newEnglishArray.length;i++)
    {
        console.log(`The english ${newEnglishArray[i]} is ${newspanishArray[i]}  in spanish`)
    }


}