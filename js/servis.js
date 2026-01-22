

var elFirstCard = null

function foo(elCard){
    elCard.classList.add('fli')
    console.log(elCard);
    if(elFirstCard===null){
        console.log('firstcar');
        elFirstCard=elCard
    }else{
        console.log('secend');
        elFirstCard = null
    }
    
}