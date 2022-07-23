let learner = [
    "Baudson Guillaume",
    "Benaccetta Rinaldo",
    "Blaevoet Benoit",
    "Brigode Xavier",
    "Charles Xavier",
    "Corda Daniela",
    "Denis Anthony",
    "Devilers Vincent",
    "Elinckx Julien",
    "Elyahyioui Selim",
    "Friquet Luca",
    "Gillard Sophie",
    "Kirac Axel",
    "Maddouri Hazem",
    "Maurcot Dylan",
    "Moussiaux Titouan",
    "Moraes Kamilla",
    "Pécher Stéphanie",
    "Scourneau Julien",
    "Vanvolcksom Doriano",
    "Vervoot Eddy"
];
function randomColorHex()
{
    let rndRed = parseInt(Math.random() * 256);
    let rndGreen = parseInt(Math.random() * 256);
    let rndBlue = parseInt(Math.random() * 256);
    return `#${rndRed.toString(16)}${rndGreen.toString(16)}${rndBlue.toString(16)}`;
}
/**

  @param color 
  @returns 
 */
 function brightnessByColor(color) {
    let isHEX = color.indexOf("#") == 0;
    let isRGB = color.indexOf("rgb") == 0;
    
    let r,g,b;
    if (isHEX) {
        let m = color.substr(1).match(color.length == 7 ? /(\S{2})/g : /(\S{1})/g);
        if (m) r = parseInt(m[0], 16), g = parseInt(m[1], 16), b = parseInt(m[2], 16);
    }
    if (isRGB) {
        let m = color.match(/(\d+){3}/g);
        if (m) r = m[0], g = m[1], b = m[2];
    }
    if (typeof r != "undefined") return ((r*299)+(g*587)+(b*114))/1000;
}
function extractColor(color)
{
    let isHEX = color.indexOf("#") == 0;
    let isRGB = color.indexOf("rgb") == 0;
    let r = 0, g = 0, b = 0;
    if (isHEX) {
        let m = color.substr(1).match(color.length == 7 ? /(\S{2})/g : /(\S{1})/g);
        if (m)
        {
            r = parseInt(m[0], 16), g = parseInt(m[1], 16), b = parseInt(m[2], 16);
        }
    }
    else if(isRGB)
    {
        let col = color.substr(3, color.length - 3);
        let tempVal = '';
        let result = [];
        let iElem = 0;
        for(let i = 0; i < col.length; i++)
        {
            if(col[i] !== ' ' && col[i] !== '(' && col[i] !== ')')
            {
                if(col[i] === ',')
                {
                    iElem++;
                    result.push(tempVal);
                    tempVal = '';
                }
                else
                {
                    tempVal = `${tempVal}${col[i]}`;
                }
            }
            else
            {

            }
        }
        result.push(tempVal);
        if(result.length > 0)
        {
            r = result[0];
            g = result[1];
            b = result[2];
        }
    }
    return {
        red: r,
        green: g,
        blue: b
    };
}
// Ex 1
let section = document.createElement('section');
section.style.backgroundColor = randomColorHex();
let article = document.querySelector('article');
article.appendChild(section);
// Ex 2
for(let child of document.body.children)
{
    let bgColor = window.getComputedStyle(child, null).getPropertyValue('background-color');
    let colTXT = extractColor(bgColor);
    colTXT.r = 255 - colTXT.r;
    colTXT.g = 255 - colTXT.g;
    colTXT.b = 255 - colTXT.b;
    child.style.color = `#${colTXT.r.toString(16)}${colTXT.g.toString(16)}${colTXT.g.toString(16)}`;
}

window.onload = () => {
    let bodyChildrens = Array.prototype.slice.call(document.body.childNodes, 0);

    for(let i = 0; i < bodyChildrens.length; i++)
    {
        let rndIndex = parseInt(Math.random() * bodyChildrens.length);
        let t1 = bodyChildrens[i];
        bodyChildrens[i] = bodyChildrens[rndIndex];
        bodyChildrens[rndIndex] = t1;
    }
    for(let itm of bodyChildrens)
    {
        itm.parentNode.removeChild(itm);
    }
    for(let itm of bodyChildrens)
    {
        document.body.appendChild(itm);
    }
}
