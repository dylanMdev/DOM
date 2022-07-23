
console.log(document.title);
document.title = "Alchem'";


function randomColorHex()
{
    let rndRed = parseInt(Math.random() * 256);
    let rndGreen = parseInt(Math.random() * 256);
    let rndBlue = parseInt(Math.random() * 256);
    return `#${rndRed.toString(16)}${rndGreen.toString(16)}${rndBlue.toString(16)}`;
}
document.body.style.backgroundColor = randomColorHex();

for(let i = 0; i < document.body.children.length; i++)
{
    if(i == 1)
    {
        for(let child of document.body.children[i].childNodes)
        {
            console.log(child);
        }
        break;
    }
}