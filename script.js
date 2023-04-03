// console.log("space running")
// document.querySelector('.cross').addEventListener('click', ()=>{
//    document.querySelector('.dot').style.display ='none';
        
//    document.querySelector('.cross').style.display ='inline';
// })
document.querySelector('.dot').addEventListener("click",()=>{
      document.querySelector('.sidebar').classList.toggle('sidebargo');
     if(document.querySelector('.sidebar').classList.contains('sidebargo')){
     document.querySelector('.dot').style.display ='inline';
     document.querySelector('.cross').style.display ='none';
     }
   //   else{
   //      document.querySelector('.dot').style.display ='none';
        
   //      document.querySelector('.cross').style.display ='inline';

   //   }
})



// document.querySelector('.cross').addEventListener('click', ()=>{
//    document.querySelector('.sidebar').classList.toggle('sidebargo');
//      if(document.querySelector('.sidebar').classList.contains('sidebargo')){
//      document.querySelector('.cross').style.display ='none';
//      document.querySelector('.dot').style.display ='none';
//      }
   //   else{
   //      document.querySelector('.cross').style.display ='none';
        
   //      document.querySelector('.dot').style.display ='inline';

   //   }
   
// })