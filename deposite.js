document.getElementById('btn-deposite').addEventListener('click',function(){
// Input Filed Dposite
  const depositeFiled=document.getElementById('deposite-Field')
  const depositeAmount=depositeFiled.value
  const newDeposite=parseFloat(depositeAmount)
  console.log (newDeposite);
//Deposite Filed
  const depositetotal=document.getElementById('deposite-total')
  const depositeElemnt=depositetotal.innerText
  const preDeposite=parseFloat(depositeElemnt)
  console.log(preDeposite);
//Total Deposite
  const currentDeposite=newDeposite + preDeposite
  depositetotal.innerText =currentDeposite
  console.log(currentDeposite);

  
  //Total Balance
  const blancetotalElement=document.getElementById('blance-total')
  const blanceString=blancetotalElement.innerText
  const blancetotal=parseFloat(blanceString)
  console.log(blancetotal);

  const currentBlance=blancetotal +newDeposite
  blancetotalElement.innerText=currentBlance
  console.log(currentBlance);

  depositeFiled.value= ""

})






























