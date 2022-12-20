const background = document.getElementById('wrapper');
const bckbtn = document.getElementById('bck-btn');
const activity = document.getElementById('activity');
const img = document.getElementById('img');
const sleep = document.getElementById('s-btn');
const eat = document.getElementById('eat');
const run = document.getElementById('run');
const content = document.getElementById('content');
const reset = document.getElementById('reset');



// style change using getElementById();
bckbtn.onclick =() =>{
    const arr = ['red','blue','black','pink'];
    const color=arr[Math.floor(Math.random()*4)];
    if(color === 'blue' || color === 'black'){
        background.style.color='white';
        activity.style.color='white';
        background.style.backgroundColor= color;
        activity.style.backgroundColor= color;
    }
    else{
        background.style.color='black';
        activity.style.color='black';
        background.style.backgroundColor= color;
        activity.style.backgroundColor= color;
    }
    
};

//atrribute change for element img
//inner content change in h1 tag
sleep.onclick = () => {
    img.src='./assets/sleepingPuppy.jpg';
    content.innerHTML = 'Puppy is sleeping now...';
}

run.onclick = () =>{
    img.src='./assets/runingPuppy.jpg';
    content.innerHTML='Puppy is running now....';
}

eat.onclick = () =>{
    img.src='./assets/eatingPuppy.jpg';
    content.innerHTML='Puppies are eating now...'
}

reset.onclick = () =>{
    img.src='./assets/puppy.jpg';
    content.innerHTML='Hi, I am puppy dog';
    background.style.backgroundColor='aqua'
    activity.style.backgroundColor='aqua';
    background.style.color='black';
    activity.style.color='black';
}