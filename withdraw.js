document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField=document.getElementById('withdrawField')
    const withdrawAmmount=withdrawField.value 
    const newWithdrew=parseFloat(withdrawAmmount)

    const withdrawTotal=document.getElementById('withdraw-total')
    const withdraw_Ammount=withdrawTotal.innerText
    const preWithdraw=parseFloat(withdraw_Ammount)
    console.log(preWithdraw);

    const currentWitdrawblance= preWithdraw + newWithdrew
    withdrawTotal.innerText= currentWitdrawblance

    const balanceTotalElement=document.getElementById('blance-total')
    const balancestring=balanceTotalElement.innerText
    const blancetotal=parseFloat(balancestring)

    const totalBlance=newWithdrew - blancetotal;
    console.log(totalBlance);

    balanceTotalElement.innerText=totalBlance;

    withdrawField.value= ""

})


