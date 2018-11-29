$(document).ready(function(){
var $bill;
var $ppl;
var $percent;
var $other;


$('.dropdown').on('click',()=>{
   $percent = $('.dropdown').val();
   $other = $('#other').val();
   
  if($percent == 1 ){
    $('#other').slideDown();
  }else{
    $('#other').css('display','none');
    $other = $('#other').val("");
  }    
});
  
$('#ppl').on('keyup',()=>{
     $bill = $('#bill').val();
     $ppl = $('#ppl').val();
     $percent = $('.dropdown').val();
     $other = $('#other').val()/100;
    
     function calc1(){
       let tip = $bill*$percent;
       let dTip = tip/$ppl;
       if($ppl == 1){
         $('#error').hide();
         $('#answer').text('Tip Amount : '+tip.toFixed(2)+'$');
         $('#answer').show();
       }else if ($ppl > 1){
         $('#error').hide();
         $('#answer').text('Tip Amount : '+dTip.toFixed(2)+'$');
         $('#answer').show();
       }else if ($ppl < 0) {
         $('#answer').hide();      
         $('#error').text('Please Insert a Valid Number');
         $('#error').show();
       }else if($ppl < 1){
         $('#answer').hide();      
         $('#error').text('');
         $('#error').show();
       }
     }//end of calc1
    
     function calc2(){
       let tip = $bill*$other;
       let dTip = tip/$ppl;
       if($ppl == 1){
         $('#error').hide();
         $('#answer').text('Tip Amount : '+tip.toFixed(2)+'$');
         $('#answer').show();
       }else if ($ppl > 1){
         $('#error').hide();
         $('#answer').text('Tip Amount : '+dTip.toFixed(2)+'$');
         $('#answer').show();
       }else if ($ppl < 0) {
         $('#answer').hide();      
         $('#error').text('Please Insert a Valid Number');
         $('#error').show();
       }else if($ppl < 1){
         $('#answer').hide();      
         $('#error').text('');
         $('#error').show();
       }
     }//end of calc2
    
    
    if ($other === 0 || $other === "") {
      calc1();
    }else{
      calc2();
    }
    
    
  });//key up
    
    
  }
  
  
  
  //test 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
});//doc ready