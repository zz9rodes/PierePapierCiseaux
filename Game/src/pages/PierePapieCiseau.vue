<template>
    <div>
        <div class="container">
            <div class="scope">
                <div class="btn" style="display: flex; margin: 10px;">
                    <div class="start" @click="part.istarted=true;">Restart</div>
                    <div class="start">NewPart</div>
                    <div style="flex: 2;justify-content: end; display: flex;">{{ part.time }} </div>
                </div>
               <div class="score" style="display: flex; justify-content: center;
               align-items: center;">
                    <div>
                        <img src="../assets/user.jpeg" alt="">
                    </div>
                    <div style="margin: 0 10px;">{{ part.usescore}}-{{ part.computerscore }}</div>
                    <div>
                         <img src="../assets/Robot.jpeg" alt="">
                    </div>
                </div>
                <div class="status" style="display: flex; justify-content: center;
               align-items: center; margin-top: 50px;" >
                    {{ part.status }}
                </div>
            </div>
            <div class="choice-btn">
                <div class="user">
                    <img src="../assets/user.jpeg" alt="" :class="part.istarted? 'isactive':'inactive'">
                    <button class="piere" @click="()=>Operation('piere')">Piere</button>
                    <button class="papier" @click="()=>Operation('papier')">Papier</button>
                    <button class="ciseaux" @click="()=>Operation('ciseaux')">Ciseaux</button>
                </div>
                <div class="computer">
                    <img src="../assets/Robot.jpeg" alt="" :class="part.istarted? 'isactive':'inactive'">
                    <button class="piere">Piere</button>
                    <button class="papier">Papier</button>
                    <button class="ciseaux">Ciseaux</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref,reactive } from 'vue';
    var status=ref('')
     status.value='Your are lose '


     var part=reactive({
        time:-3,
        status:"",
        usescore:0,
        computerscore:0,
        userchoice:null,
        computerchoice:null,
        nrbpart:0,
        istarted:false
     })
     const AllChoice=['pierer','papier','ciseaux' ]

    const startGame=()=>{
        console.log(part.istarted);
        setInterval(()=>{
            if(part.istarted){
                if(part.time>9 && part.userchoice==null){
                    part.time=part.time=-3
                    part.istarted=false
                    part.status="your are lose"
                    console.log("the time is > 10 seconde loseeerr")
                }
                else{
                    part.time=part.time+1
                }
            }
            // else{
            //     part.status=null
            // }
        },1000)   
    }
    startGame()

    const Operation=(params)=>{
        if((part.time>0)&&(part.time<10)){
            part.istarted=false
            var indexAleatoire = Math.floor(Math.random() * 3);
            console.log("voici l'indice"+indexAleatoire)
            part.computerchoice=AllChoice[indexAleatoire]
            console.log("voici le choix du computer "+part.computerchoice)

            console.log(part.computerchoice);
            if(params==part.computerchoice){
                part.usescore=part.usescore+1
                part.computerscore=part.computerscore+1
                part.status='Match Null'
            }
            else if((params=='piere' && part.computerchoice=='ciseaux')||(params=='ciseaux' && part.computerchoice=='papier')||(params=='papier' && part.computerchoice=='piere')){
                part.usescore=part.usescore+1
                part.status="You're a winner"
            }
            else{
                part.computerscore=part.computerscore+1
                part.status="You're a loser"
            }
            part.time=-3
        }
        else{
            part.status="Wait for the game to start"
        }
    }
</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&family=Dosis:wght@300&display=swap');
    *{
        font-family: 'Comfortaa', sans-serif;
    }
.container{
        background-color: rgb(213, 219, 219);
        min-height: 90vh;
        display: flex;
        flex-direction: column;
        border-radius: 8px;
    }
    .container .scope{
        min-height: 200px;
        background-color: white;
        margin: 10px;
        border-radius: 8px;
    }
    .choice-btn{
        display: flex;
        justify-content: center;
        align-items: center;       
    }
    .choice-btn >div{
        flex: 2;
        display: flex;
        flex-direction: column;
    }
    .user,.computer{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    button{
        padding: 10px;
        border-radius: 9px;
        background-color: white;
        width: 100px;
        border:none;
        outline: none;
        margin: 10px;
        cursor: pointer;
    }

    .piere:focus{
        background-color: rgb(99, 149, 225);
    }
    .papier:focus{
        background-color: rgb(187, 86, 28);
        
    }

    img{
        height: 50px;
        border-radius: 50px;
        cursor: pointer;
    }

    .start{
        background-color: rgb(24, 104, 117);
        padding: 5px;
        margin-left: 20px;
        border-radius: 8px;
        color: white;
        max-width:100px ;
        cursor: pointer;
        border:  1px solid rgb(24, 104, 117);
        transition: 500ms ease;
    }
    .start:active{
        background-color: white;
        color: rgb(24, 104, 117);
    }
    
    .isactive{
        animation: rotation 2s infinite linear;
    }

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
}
</style>