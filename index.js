function writeCards(name,event)
{
    let arr= [];
for(let i=0; i < name.length; i++)
{
    arr.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
}
return arr;
}
writeCards(["Guadelope", "Ollie", "Aki"], "surprise");

function countDown(count)
{
    while(count>=0)
    console.log(count--);
}
    countDown(4);

