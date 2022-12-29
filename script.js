const calcy = () => {

// document.getElementsByClassName('screen-body-form').style.display = 'none';


    let nt = document.getElementById('nt').value ;
    let ed = document.getElementById('ed').value ;
    let dsd = document.getElementById('dsd').value ;
    let c = document.getElementById('c').value ;
    let maths = document.getElementById('maths').value ;
    let grades = "";

    // calculation of total number 
    let totalNum = parseFloat(nt) + parseFloat(ed) + parseFloat(dsd) + parseFloat(c) + parseFloat(maths); 
    // console.log(totalNum);
    alert(totalNum);

     // calculation of percentage 
    let percentage = (totalNum/500) * 100;
    console.log(percentage);


     // grade calculation

     if(percentage >= 80 && percentage <= 100){
           grades = 'A';
     }
     else if(percentage >= 60 && percentage <= 79){
        grades= 'B';
     }
     else if(percentage >= 40 && percentage <= 59){
        grades = 'C';
     }
     else{
        grades = 'D';
     }

     if(percentage >= 39.5){
      document.getElementById('showdata').innerHTML = `Out of 500 your total marks is ${totalNum} , your percentage is ${percentage} and your grade is ${grades}.Congratulations! You are Pass👍`
     }else{
     document.getElementById('showdata').innerHTML = `Out of 500 your total marks is ${totalNum} , your percentage is ${percentage} and your grade is ${grades}.Oops! You are fail🙄`
     }



}