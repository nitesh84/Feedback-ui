let container=document.querySelector('.container');
let allDiv=document.querySelectorAll('div');
allDiv.forEach((div)=>{
    div.addEventListener('click',()=>{
        allDiv.forEach(d=> d.classList.remove('selected'));
        div.classList.add('selected');
    })
})


let button=document.querySelector('button');
let main=document.querySelector('main');

button.addEventListener('click',()=>{
    const selectedDiv=[...allDiv].find( div => div.classList.contains('selected'));
    console.log(selectedDiv);
    
    if(selectedDiv){
        const feedbackText=selectedDiv.querySelector('p').innerText;
        main.innerHTML = `
        <p>Thank you!</p>
        <p>Feedback: ${feedbackText}</p>
        <p>We'll use your feedback to improve our customer support.</p>
    `;
    let p = document.querySelectorAll('p');
    main.style.width = "350px";
    main.style.textAlign = "center";
    p[0].style.fontWeight = "700";
    p[1].style.fontWeight = "700";
    }
})



// button.addEventListener('click',()=>{
//     if(div1.classList.contains('selected') | div2   .classList.contains('selected') ||div3.classList.contains('selected')){

//     main.innerHTML='';
//     main.innerHTML=`
//         <p>Thank you!</p>
//         <p>Feedback : ${div1.classList.contains('selected')? "UnHappay" : div2.classList.contains('selected') ? "Nuetral" : "Satisfied" } </p>
//         <p>We'll use your feedback to improve our customer support. </p>

//     `
//     let p=document.querySelectorAll('p');
// main.style.width="350px";
// main.style.textAlign="center";
// p[0].style.fontWeight="700";
// p[1].style.fontWeight="700";
//     }
// });