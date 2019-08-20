
let userInput= prompt (`Press 1. To list English to Spanish translation
Press 2. To list all Spanish to English Translation  Press 3. To Enter a new English Translation
 Press 4. To enter a New Spanish Translation Press q to quit`);

let englishArray=["One","two","three","red","blue","green"];

if (userInput==="1")
{
    // let spanishArray=[];
    // newEnglishArray=[];
    //
    // let userInput2= prompt("Enter English word");
    // let userInput3=prompt("Enter that word in spanish:");
    // newEnglishArray.push(userInput2);
    // spanishArray.push(userInput3);
    for(i=0;i<englishArray.length;i++)
    {
        console.log(`The english word ${englishArray[i]} is ${spanishArray[i]}  in spanish`)
    }
}

if(userInput==="2")
{

}

if(userInput==="3")
{
    let spanishArray=[];
    newEnglishArray=[];

    let userInput2= prompt("Enter English word");
    let userInput3=prompt("Enter that word in spanish:");
    newEnglishArray.push(userInput2);
    spanishArray.push(userInput3);
    for(i=0;i<newEnglishArray.length;i++)
    {
        console.log(`The english ${newEnglishArray[i]} is ${spanishArray[i]}  in spanish`)
    }
}
if(userInput==="4")
{

}
else if (userInput==="q");

