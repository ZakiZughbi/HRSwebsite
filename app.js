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
    'I met Katherine two years ago. When I was looking for a wedding planner out of everyone she stood out and genuinely understood everything I wanted. We clicked right away and my wedding was a success all because of her. My family felt welcome and loved the party. Katherine is someone who is very responsive and always there when you need her. Every time I needed something changed she was there to help me and perfect everything to my vision. She took care of everything, my bridesmaids, my family, and me. My dream wedding came to reality all because of her astonishing work, I highly recommend her not only because how professional she is, but a great person who genuinely wants the best for the bride!',
    'Katherine was wonderful to work with. She helped me plan a big wedding in under 2 months. She answered questions quickly. She was patient with us, constantly changing our needs. She was willing to experiment and try a new look for our wedding reception decor. It came out absolutely breath taking. She gave us ideas to keep costs down when possible. I felt like I was working with my friend when I worked with her. I would definitely go to her for any major event again.',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.X',
    'Katherine Rodriguez has always had a creative intuition and natural passion for design. Her ability to produce high-quality luxurious events, incorporating unique design, meticulous attention to even the smallest detail is her specialty.X',
    'I am getting emotional writing this review because I literally love Katherine! Omg from start to finish she made the day so smooth and stress free. I didn’t need to worry about a sing thing. Weeks leading up to the wedding, Katherine spoke and confirmed with all my vendors and made sure everything was all set. The day was PERFECT. She was just over the top, SOOOO nice and knew her stuff. Overall, just amazing. I believe EVERY SINGLE BRIDE can benefit from a Day of Coordinator. The decoration was amazing, she knew my vision and made my dream wedding come true! Katherine was fantastic to work with. She did everything in her power to make sure I was happy on my special day.',
];

let testNameList = ['Hanoi & Patxi', 'Narina & Mohammad', 'Vivian & Mike', 'Lilly & Raul', 'David & Cinthya'];

let testText = document.getElementById('testText');
let testName = document.getElementById('testName');
let testImage = document.getElementById('testImg');
var testImageSrc = './Assets/testPic0.jpg';

let i = 0;
function testLoop(){
    setTimeout (()=> {
        testText.innerHTML=testTextList[i];
        testName.innerHTML=testNameList[i];
        testImageSrc = './Assets/testPic' + i + '.jpg';
        testImage.src = testImageSrc;
        i++;
        if (i == 5){
            i = 0;
        }
        if (i < 10) {
            testLoop();
        }
    }, 8000);
}

testLoop();
