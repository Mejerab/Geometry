// function calculateRectangle(){
//     const inputWidth = document.getElementById('width');
//     const inputWidthValue = parseFloat(inputWidth.value);
//     const width = inputWidthValue;
//     const inputLength = document.getElementById('length');
//     const inputLengthValue = parseFloat(inputLength.value);
//     const length = inputLengthValue;
//     const math =  width * length;

//     const rectangleOutput = document.getElementById('page-right');

//     // p1
//     const p1 = document.createElement('p');
//     p1.innerText = '2. Rectangle'
//     p1.style.display = 'inline-block';
//     p1.style.paddingLeft = '10px';
//     p1.style.paddingRight = '20px';
//     p1.style.marginTop = '10px';
    
//     // p2
//     const p2 = document.createElement('p');
//     p2.innerText = math.toFixed(1);
//     p2.style.display = 'inline-block';
//     p2.style.marginTop = '10px';

//     // p3
//     const p3 = document.createElement('p');
//     p3.innerHTML = `cm<sup>2</sup>`;
//     p3.style.display = 'inline-block';
//     p3.style.paddingRight = '10px';
//     p3.style.marginTop = '10px';

//     // p4
//     const p4 = document.createElement('p');
//     p4.innerHTML = '<button>Convert to m<sup>2</sup></button>';
//     p4.style.display = 'inline-block';
//     p4.style.backgroundColor = '#1090D8';
//     p4.style.color = '#fff';
//     p4.style.padding = '5px';
//     p4.style.marginRight = '5px';
//     p4.style.borderRadius = '5px';
//     p4.style.marginTop = '10px';

//    rectangleOutput.appendChild(p1);
//    rectangleOutput.appendChild(p2);
//    rectangleOutput.appendChild(p3);
//    rectangleOutput.appendChild(p4);
// }
var container = document.getElementById('container');
container.innerHTML = '';
console.log(container);