
var rr= true
function rinarWords(btn){
    var pep = document.querySelector('.contacts-container')
    var h2 = document.querySelector('.h2')

   if(rr){
       rr=false
       pep.classList.add('hidden')
       h2.classList.add('hidden')
       btn.innerHTML='bake'
       removeHidden()
    }else{
        pep.classList.remove('hidden')
        h2.classList.remove('hidden')
        addHidden()
        rr=true
        btn.innerHTML='rinat'
   }
  
    
}

function removeHidden(){
    var sPep =document.querySelector('.tt')
    console.log(sPep);
sPep.classList.remove('hidden')
    
}
function addHidden(){
    var sPep =document.querySelector('.tt')
    console.log(sPep);
sPep.classList.add('hidden')
    
}