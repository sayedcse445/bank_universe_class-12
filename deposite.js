document.getElementById('btn-deposite').addEventListener('click', function() {
  const depositeField = document.getElementById('depositeField');
  
  // Check if depositeField exists and its value is not null or empty
  if (btn-deposite && deposite-Field.value.trim() !== '') {
    const depositeAmmount = depositeField.value;
    // Rest of your code using depositeAmmount...
  } else {
    console.error('Deposite field is empty or not found.');
  }
});

// document.getElementById("btn-deposite").addEventListener('click',function(){
//     const depositeField=document.getElementById('deposite-Field')
//     const depositeAmmount=depositeField.value
//     console.log(depositeAmmount);
// })