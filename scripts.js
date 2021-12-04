array = []

const onButtonCLick = () => {
    var val = document.getElementById('elem1').value;
    array.push({ a: val, s: true })
    str2.innerHTML = '';
    // var newArray = array.map(element => {
    //     return element.a
    // });

    // document.write('<ol start="0">');
    // array.forEach( element => {
    //   document.write(`<li>${element.a}</li>`);
    // });
    // document.write('<ol>');

    // document.getElementById('str').innerHTML=newArray
    // for (element in array) {
    //     if (array[element].s) {
    //         str2.innerHTML +=  + array[element].a + '<br/>';
    //     }
       
    // }
    setArray()
}

const setArray = ()=>{
    for (element in array) {
        if (array[element].s) {
            str2.innerHTML += array[element].a + '<br/>';
        }
        else if(!array[element].s)
        {
            str2.innerHTML += "x " + array[element].a + '<br/>';
        }
       
    }
}
const onSoloClick=()=>{
    content=document.getElementById("soloElement").innerHTML
    console.log(content)
    for(let i=0;i<array.length;i++ )
    {
        if(array[i].a===content)
        {
            str2.innerHTML ="";
            array[i].s=false;
            setArray()
        }
    }
}

// const showInfo = () => {
//     for (let index = 0; index <array.length; index++) {
//         if(i==array.length-1)
//         {i=0}
//         const element = array[index];
//         console.log(element)
//         setTimeout(document.getElementById('soloElement').innerHTML = element, 1000)

//     }
// }

var current = 0;
setInterval(function(){
    if(array[current].s)
    { 
      document.getElementById('soloElement').innerHTML = array[current].a;
      current++;
      if(current >= array.length) current = 0;
    }
    else
    {
        current++;
         if(current >= array.length) current = 0;
        return;
    }

}, 1500);
// showInfo()






// document.querySelector('.array').appendChild(li)
