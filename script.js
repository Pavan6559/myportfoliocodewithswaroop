// code for text animation like typing
function changeaboutmetext(){
    const aboutmetexts=["tech enthusiast","data scientist","full stack web developer"];
    const typingspeed=100; // in milliseconds speed
    const erasespeed=50;
    const pausetime=1500;
    const aboutmeelement=document.querySelector('.about-me');

    let textindex=0;
    let charindex=0;
    let isdeleting=false;

    function type(){
        const currenttext=aboutmetexts[textindex];
        //typing
        if(!isdeleting&&charindex<currenttext.length){
            aboutmeelement.textContent+=currenttext[charindex];
            charindex++;
            setTimeout(type, typingspeed);
        }
        // erasing
        else if(isdeleting&&charindex>0){
            aboutmeelement.textContent=currenttext.substring(0,charindex-1);
            charindex--;
            setTimeout(type, erasespeed);
        }
        else{
            isdeleting=!isdeleting;
            if(isdeleting==false){
                textindex=(textindex+1)%aboutmetexts.length;
            }
            setTimeout(type, pausetime);
        }

    }
    type();
}

changeaboutmetext();