function randomColorHex()
{
    let rndRed = parseInt(Math.random() * 256);
    let rndGreen = parseInt(Math.random() * 256);
    let rndBlue = parseInt(Math.random() * 256);
    return `#${rndRed.toString(16)}${rndGreen.toString(16)}${rndBlue.toString(16)}`;
}


const importants = document.querySelectorAll('.important');
for(let item of importants)
{
    item.setAttribute('title', 'This is an important item');
}

const images = document.querySelectorAll('img');
for(let image of images)
{
    if(!image.classList.contains('important'))
    {
        image.style.display = 'none';
    }
}

const paragraphs = document.querySelectorAll('p');
for(let paragraph of paragraphs)
{
    console.log(paragraph);
    if(paragraph.classList.length == 0)
    {
        paragraph.style.color = randomColorHex();
    }
    else
    {
        for(let cls of paragraph.classList)
        {
            console.log(cls);
        }
    }
    
}