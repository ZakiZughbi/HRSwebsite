menuBar = document.querySelector('.menuBar');
close = document.querySelector('.close');
sideNav = document.querySelector('.sideNav');
logo = document.querySelector('.logo a img');

//Open Side Nav
menuBar.addEventListener('click', ()=>{
    sideNav.style.width="100%";
    logo.style.position="fixed";
    setTimeout(()=> {
        close.style.opacity="1";
    }, 500);
});

//Close Side Nav
close.addEventListener('click', ()=>{
    sideNav.style.width="0%";
    close.style.opacity="0";
    logo.style.position="static";
});


//Sliding Images
// var counter = 1;
// setInterval(function(){
//     document.getElementById('radio' + counter).checked = true;
//     counter++;
//     if(counter > 5){
//         counter = 1;
//     }
// }, 5000);
