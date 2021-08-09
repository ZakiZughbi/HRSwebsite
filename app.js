//Variables
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

//Testimonials
let testTextList = [
    'We loved our wedding. Katherine made it a truly memorable moment to share with our kids and grandchildren. We are so fortunate to have had her as our Event Coordinator. Once again thank you so much Katherine.',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    ' Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'Katherine Rodriguez has always had a creative intuition and natural passion for design. Her ability to produce high-quality luxurious events, incorporating unique design, meticulous attention to even the smallest detail is her specialty.',
    'Planning a wedding can be confusing, time-consuming, and even overwhelming. Whether you had a vision since childhood, do not have a clue where to begin,'
];

let testNameList = ['David & Cinthya', 'John & Jane', 'Mark & Stephiny', 'Alex & Alexa', 'Carlos & Maria'];

let testText = document.getElementById('testText');
let testName = document.getElementById('testName');
let testImage = document.getElementById('testImg');
var testImageSrc = './Assets/testPic0.png';

let i = 0;
function testLoop(){
    setTimeout (()=> {
        testText.innerHTML=testTextList[i];
        testName.innerHTML=testNameList[i];
        testImageSrc = './Assets/testPic' + i + '.png';
        testImage.src = testImageSrc;
        i++;
        if (i == 5){
            i = 0;
        }
        if (i < 10) {
            testLoop();
        }
    }, 5000);
}

testLoop();
