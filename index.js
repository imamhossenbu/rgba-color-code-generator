const generate = ()=>{
   const r = Math.floor(Math.random()*255);
   const g = Math.floor(Math.random()*255);
   const b = Math.floor(Math.random()*255);
   let a = Math.random();
   a = a.toFixed(1);

   return `rgba(${r},${g},${b},${a})`;
}


const update = ()=>{
    const color = generate();
    const colorBox =  document.getElementById('color-box');
    colorBox.style.backgroundColor = color;
    const colorCode =  document.getElementById('color-code');
    colorCode.innerText = color;
}



const copyColorCode = ()=>{
    const colorCode = document.getElementById('color-code');
    const input =  document.createElement('input');
    document.body.appendChild(input);
    input.value =  colorCode.innerText;



    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);

    alert('Color Copied To clipboard');
}

document.getElementById('copy').addEventListener('click',()=>{
    copyColorCode();
})

function generateColor(){
    update();
}

