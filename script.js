let container=document.querySelector('.container');
let div1=document.querySelector('.container div:nth-child(1)');
let div2=document.querySelector('.container div:nth-child(2)');
let div3=document.querySelector('.container div:nth-child(3)');

div1.addEventListener('click',()=>{
    div1.classList='selected';
    console.log('called');
    div2.classList.remove('selected')
    div3.classList.remove('selected')

})
div2.addEventListener('click',()=>{
    div2.classList='selected';
    console.log('called');
    div1.classList.remove('selected')
    div3.classList.remove('selected')

})
div3.addEventListener('click',()=>{
    div3.classList='selected';
    console.log('called');
    div2.classList.remove('selected')
    div1.classList.remove('selected')

})

let button=document.querySelector('button');
let main=document.querySelector('main');





button.addEventListener('click',()=>{
    if(div1.classList.contains('selected') | div2   .classList.contains('selected') ||div3.classList.contains('selected')){

    main.innerHTML='';
    main.innerHTML=`
        <p>Thank you!</p>
        <p>Feedback : ${div1.classList.contains('selected')? "UnHappay" : div2.classList.contains('selected') ? "Nuetral" : "Satisfied" } </p>
        <p>We'll use your feedback to improve our customer support. </p>

    `
    let p=document.querySelectorAll('p');
main.style.width="350px";
main.style.textAlign="center";
p[0].style.fontWeight="700";
p[1].style.fontWeight="700";
    }
});