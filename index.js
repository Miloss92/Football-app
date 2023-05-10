//registration buttons
const registrationIcon = document.querySelector(".registration-icon");
const registrationBtnsDiv = document.querySelector(".registration-buttons");
registrationIcon.addEventListener("click", () => {
    registrationBtnsDiv.classList.toggle("display-none");
})

const signInBtn = document.querySelector("#nav-sign-in-btn");
const logInBtn = document.querySelector("#nav-log-in-btn");
const signOutBtn = document.querySelector(".sign-out-btn");

//pop-ups
const popUpWrapper = document.querySelector(".pop-up-wrapper");
const signInPopUp = document.querySelector(".sign-pop-up");
const logInPopUp = document.querySelector(".log-pop-up");
const signOutPopUp = document.querySelector(".sign-out-pop-up");
const xBtns = document.querySelectorAll(".x-btns");
const closeBtns = document.querySelectorAll(".close-btns");

const appDesc = document.querySelector(".app-desc");

signInBtn.addEventListener("click", () => {
    popUpWrapper.style.display = 'block';
    signInPopUp.style.display = 'block';
    appDesc.style.display = 'none';
    registrationBtnsDiv.classList.add("display-none");
});
logInBtn.addEventListener("click", () => {
    popUpWrapper.style.display = 'block';
    logInPopUp.style.display = 'block';
    appDesc.style.display = 'none';
    registrationBtnsDiv.classList.add("display-none");
});
signOutBtn.addEventListener("click", () => {
    popUpWrapper.style.display = "block";
    signOutPopUp.style.display = "block";
    appDesc.style.display = 'none';
    registrationBtnsDiv.classList.add("display-none");
});
xBtns.forEach(el => {
    el.addEventListener("click", () => {
        popUpWrapper.style.display = 'none';
        signInPopUp.style.display = 'none';
        logInPopUp.style.display = 'none';
        signOutPopUp.style.display = "none";
        appDesc.style.display = 'block';
    })
})
closeBtns.forEach(el => {
    el.addEventListener("click", () => {
        popUpWrapper.style.display = 'none';
        signInPopUp.style.display = 'none';
        logInPopUp.style.display = 'none';
        signOutPopUp.style.display = "none";
        appDesc.style.display = 'block';
    })
});

//football fields
const homeTeamFieldLocation = document.querySelector(".home-team");
const awayTeamFieldLocation = document.querySelector(".away-team");
let homeX;
let homeY;
let awayX;
let awayY;

const fields =  [homeTeamFieldLocation, awayTeamFieldLocation];
fields.forEach((singleField, index) => {
    singleField.addEventListener("click", (e) => {
        const ball = document.querySelector(".ball");
        if(ball){ball.remove()}
        let div = document.createElement("div");
        div.style.height = "20px";
        div.style.width = "20px";
        div.style.backgroundImage = "url('./assets/ball-2.png')";
        div.style.backgroundSize = "cover";
        div.style.backgroundRepeat = "no-repeat";
        div.style.borderRadius = "999px";   
        div.style.position = "absolute";
        div.style.left = `${(index == 0)? homeX : awayX}px`;
        div.style.top = `${(index == 0)? homeY : awayY}px`;
        div.classList.add("ball");
        singleField.appendChild(div);
    })
})

homeTeamFieldLocation.addEventListener("mousemove", (e) => {
    distance = homeTeamFieldLocation.getBoundingClientRect();
    homeX = e.clientX - distance.x - 10; 
    homeY = e.clientY - distance.y - 10;
});
awayTeamFieldLocation.addEventListener("mousemove", (e) => {
    distance = awayTeamFieldLocation.getBoundingClientRect();
    awayX = e.clientX - distance.x -10; 
    awayY = e.clientY - distance.y -10;
});

//statistic navigation
const clubsNavBtn = document.querySelector('.clubs-nav-btn');
const tableNavBtn = document.querySelector('.table-nav-btn');
const liveNavBtn = document.querySelector('.matches-nav-btn');

const clubSection = document.querySelector(".stat-clubs");
const tableSection = document.querySelector(".stat-table-wrapper");
const liveSection = document.querySelector(".stat-live-matches");

clubsNavBtn.addEventListener("click", ()=>{
    clubSection.classList.remove("display-none");
    tableSection.classList.add("display-none");
    liveSection.classList.add("display-none");
    clubsNavBtn.classList.add("tab-active");
    tableNavBtn.classList.remove("tab-active");
    liveNavBtn.classList.remove("tab-active");
});
tableNavBtn.addEventListener("click", ()=>{
    clubSection.classList.add("display-none");
    tableSection.classList.remove("display-none");
    liveSection.classList.add("display-none");
    clubsNavBtn.classList.remove("tab-active");
    tableNavBtn.classList.add("tab-active");
    liveNavBtn.classList.remove("tab-active");
});
liveNavBtn.addEventListener("click", ()=>{
    clubSection.classList.add("display-none");
    tableSection.classList.add("display-none");
    liveSection.classList.remove("display-none");
    clubsNavBtn.classList.remove("tab-active");
    tableNavBtn.classList.remove("tab-active");
    liveNavBtn.classList.add("tab-active");
});

// Precentage bars
const allBars = document.querySelectorAll(".stat-precentage");
allBars.forEach(el => {
    let homePrecentage = el.children[0].innerText;
    let homeBar = el.children[1];
    let awayPrecentage =  el.children[3].innerText;
    let awayBar = el.children[2];

    if(homePrecentage.includes("%") && awayPrecentage.includes("%")){
        homePrecentage = homePrecentage.replace("%", "");
        awayPrecentage = awayPrecentage.replace("%", "");
    }
    if(parseInt(homePrecentage) > parseInt(awayPrecentage)){
        homeBar.classList.add("green");
        awayBar.classList.add("lightGray")
        
    } else if(parseInt(homePrecentage) === parseInt(awayPrecentage)){
        homeBar.classList.add("lightGray");
        awayBar.classList.add("lightGray");
        
    } else if(parseInt(homePrecentage) < parseInt(awayPrecentage)){
        awayBar.classList.add("green");
        homeBar.classList.add("lightGray")
    }
});
//Opening statistic for match
const liveMatches = document.querySelectorAll(".live-match");
liveMatches.forEach(el => {
    el.addEventListener("click", () => {
        if(el.children[1].classList.contains("display-none")){
            el.children[1].classList.remove("display-none");
        } else {
            el.children[1].classList.add("display-none");
        }
        //In html id of elements is hardcoded, when result is pulled from the server id must added dinamicaly for each of element
        const element = document.getElementById(el.id);
        element.scrollIntoView({behavior: "smooth"});
    });
});


const statisticWrapper = document.querySelector(".statistic-wrapper");
if(statisticWrapper.style.display === "block"){
    appDesc.style.display = "none";
} else {
    appDesc.style.display = "block";
}
const workingTable = document.querySelector(".working-table");
if(workingTable.style.display === "block"){
    appDesc.style.display = "none";
} else {
    appDesc.style.display = "block";
} 

//FORMS - LOGIC ONLY FOR TESTING
const signInForm = document.querySelector("#sign-in-form");
const logInForm = document.querySelector("#log-in-form");

const allUsers = [
    {
        email: "worker@gmail.com",
        password: "worker123",
        priority: 0
    },
    {
        email: "milos@gmail.com",
        password: "milos123",
        priority: 1
    }
];

if(signInForm){
    signInForm.addEventListener("submit", (e)=> {
        e.preventDefault();
        const email = document.getElementById("sign-in-email").value;
        if(!email.includes("@")) return;
        const password = document.getElementById("sign-in-password").value;
        console.log(email, password);
        const newUser = {
            email: email,
            password: password,
            priority: 1
        }
        allUsers.push(newUser);
        console.log(allUsers)
        document.querySelector(".pop-up-wrapper").style.display = "none";
        document.querySelector(".sign-pop-up").style.display = "none";
    });    
}

if(logInForm){
    logInForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let email = document.querySelector("#log-in-email").value;
        let password = document.querySelector("#log-in-password").value;
        allUsers.forEach(el => {
            if(email === el.email && password === el.password){
                if(el.priority === 0){
                    document.querySelector(".working-table").style.display = "block";
                    document.querySelector(".pop-up-wrapper").style.display = "none";
                    document.querySelector(".log-pop-up").style.display = "none";
                } else {
                    document.querySelector(".statistic-wrapper").style.display = "block";
                    document.querySelector(".pop-up-wrapper").style.display = "none";
                    document.querySelector(".log-pop-up").style.display = "none";
                }
            }
        });
    });
}

const signOutButton = document.querySelector(".sign-out-button");
if(signOutButton){
    signOutButton.addEventListener("click", ()=> {
        document.querySelector(".working-table").style.display = "none";
        document.querySelector(".statistic-wrapper").style.display = "none";
        document.querySelector(".pop-up-wrapper").style.display = "none";
        document.querySelector(".log-pop-up").style.display = "none";
        document.querySelector(".sign-out-pop-up").style.display = "none";
        appDesc.style.display = "none";
        document.querySelector("#log-in-email").value = "";
        document.querySelector("#log-in-password").value = "";
        document.getElementById("sign-in-email").value = "";
        password = document.getElementById("sign-in-password").value = "";
    });
}












