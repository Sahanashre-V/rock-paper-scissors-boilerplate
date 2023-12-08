let logos = document.querySelectorAll(".logo");
let my_score=0;
let comp_score=0;
let userScoreSpan = document.getElementById("userScore");
let compScoreSpan = document.getElementById("compScore");


logos.forEach(item => {
    item.addEventListener("click", function (event) {
        let clickedId = event.target.id;
        let complier = document.getElementById("complier");
        let randnums = Math.floor(Math.random() * 3);
        let img = document.createElement("img");

        if (randnums === 0) {
            img.src = "./assets/rock-hand.png";
            img.style.height="250px"
            // console.log(randnums)
        } else if (randnums === 1) {
            img.src = "./assets/paper-hand.png";
            img.style.height="250px"
            // console.log(randnums)
        } else {
            img.src = "./assets/scissors-hand.png";
            img.style.height="250px"
            // console.log(randnums)
        }

        let lists = ["rock","paper","scissors"]

        let user_choice= clickedId;
        let comp_choice = randnums;
        console.log(user_choice)
        console.log(randnums)

        function determine_winner(user_choice,comp_choice){
           if (user_choice === lists[comp_choice]){
            // my_score+=0
            // comp_score+=0
            return "Match is a tie"
            // determine_winner(user_choice,comp_choice)
            
           }
           else if (
            (user_choice==="rock" && lists[comp_choice]==="scissors")||
            (user_choice==="paper" && lists[comp_choice]==="rock") ||
            (user_choice==="scissors" && lists[comp_choice]==="paper")
           ){
           my_score+=1;
           userScoreSpan.innerText=my_score;
           if(my_score===5){
            let ptag = document.createElement("p")
            ptag.innerText="You Won the Game";
            let logoid = document.getElementById("logoid");
            logoid.style.visibility="hidden";
            ptag.style.color= "white";
            ptag.style.textAlign="center"
            document.body.appendChild(ptag);
            let playagain = document.createElement("button");
                playagain.innerText="Play Again";
                playagain.style.color="white";
                playagain.style.backgroundColor="#f7bb3d";
                // playagain.style.margin="700px";
                playagain.style.marginTop="-950px";
                playagain.style.borderRadius="5px";
                playagain.style.padding="10px";
                playagain.style.fontSize="30px";
                playagain.style.fontWeight="700";
                playagain.style.marginLeft="660px";
                playagain.addEventListener("click",function(){
                    window.location.href="./game.html"
                })
                document.body.appendChild(playagain);
        }
           return "You won!"
           }
           else{
            // window.location.href="./index.html";
            comp_score+=1;
            compScoreSpan.innerText=comp_score;
            if(comp_score===5){
                let ptag = document.createElement("p")
                ptag.innerText="You Lose the Game";
                let logoid = document.getElementById("logoid");
                logoid.style.visibility="hidden";
                ptag.style.color= "white";
                ptag.style.textAlign="center"
                document.body.appendChild(ptag);
                let playagain = document.createElement("button");
                playagain.innerText="Play Again";
                playagain.style.color="white";
                playagain.style.backgroundColor="#f7bb3d";
                playagain.style.marginLeft="660px"
                playagain.style.marginTop="-950px";
                playagain.style.borderRadius="5px";
                playagain.style.padding="10px";
                playagain.style.fontSize="30px";
                playagain.style.fontWeight="700";
                playagain.addEventListener("click",function(){
                    window.location.href="./game.html"
                })

                document.body.appendChild(playagain)
            }
            return "You lose!"
           }

        }
        

        let output=determine_winner(user_choice,comp_choice)
        console.log(output);
        console.log("myscore",my_score);
        console.log("compsocre",comp_score);

        complier.innerHTML = "";
        complier.appendChild(img);

        console.log("ID",clickedId)
    });
});

let rockimg = document.getElementById("rockimg");
let paperimg = document.getElementById("paperimg");
let scissorsimg = document.getElementById("scissorsimg");

let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissors = document.getElementById("scissors")

rock.addEventListener('click', () => {
    displayImage(rockimg);
});

paper.addEventListener('click', () => {
    displayImage(paperimg);
});

scissors.addEventListener('click', () => {
    displayImage(scissorsimg);
});

function displayImage(image) {
    // Hide all images
    hideAllImages();

    // Show the clicked image
    image.style.display = 'block';
}

function hideAllImages() {
    const allImages = document.querySelectorAll('.game-image');
    allImages.forEach(image => {
        image.style.display = 'none';
    });
}

