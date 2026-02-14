

function createPetals(num=30){
  const petalsContainer = document.getElementById('petals');
  for(let i=0;i<num;i++){
    const petal = document.createElement('div');
    petal.className='petal';
    petal.innerHTML='🌸';
    petal.style.left=Math.random()*100+'vw';
    petal.style.animationDuration=(Math.random()*5+4)+'s';
    petal.style.fontSize=(Math.random()*20+10)+'px';
    petalsContainer.appendChild(petal);
  }
}
createPetals();
