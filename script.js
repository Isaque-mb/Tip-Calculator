$(document).ready(function(){
var $bill;
var $ppl;
var $percent;
var $other;
var $otherInp;

$('.dropdown').on('change',()=>{
   $percent = $('.dropdown').val();
   $other = $('#other').val();
   
  if($percent == 1 ){
    $('#other').slideDown();
  }else{
    $('#other').css('display','none');
    $other = $('#other').val("");
  }    
});

$('#test').on('change', function test(){
    $bill = $('#bill').val();
    var testCase = $('#test').val();
  
    switch (testCase) {
      case 'reg-tip':
        $('#bill').val(120);
        $('.dropdown').val(0.1);
        $('#ppl').val(2);
      break;        
      case 'other-tip':
          $('#bill').val(120);
          $('.dropdown').val(1);
          $('#other').val(50);
          $('#ppl').val(2);
      break;
      case 'no-bill':
          $('#bill').val('');
          $('.dropdown').val(1);
          $('#other').val(50);
          $('#ppl').val(2);
      break;
      case 'no-ppl':
          $('#bill').val(120);
          $('.dropdown').val(1);
          $('#other').val(50);
          $('#ppl').val('');
      break;
      case 'two-dots':
    alert('INSERT A BILL PRICE WITH TWO DOTS');
          $('.dropdown').val(1);
          $('#other').val(50);
          $('#ppl').val(3);
      break;
      case 'two-ee':
      alert('INSERT A BILL PRICE WITH TWO LETTER E');
          $('.dropdown').val(1);
          $('#other').val(50);
          $('#ppl').val(3);
      break;
      default:
        console.log('No cases found - Funtions CALC1 || CALC2 executed');
        
    }//end of switch block  
  
  
});//end of on test change



$('#bttn').on('click', function math(){
    
     $bill = $('#bill').val();
     $ppl = $('#ppl').val();
     $percent = $('.dropdown').val();
     $other = $('#other').val()/100;
     $tipOption = $('#tip-option').val();
     
     function calc1(){// regular inputs
       let tip = $bill*$percent;
       let dTip = tip/$ppl;
       let $otherInp = $('#other').val();
      
       
       if($bill.length === 0){//error
         $('#answer').hide();      
         $('#error').text('Please Insert a Valid Bill Price');
         $('#error').show();
       }else if ($bill < 0 || $ppl < 0) {//error
         $('#answer').hide();      
         $('#error').text('Please Insert a Valid Number');
         $('#error').show();
       }else if($ppl === 0 || $ppl === ''){//error
         console.log('no ppl');
       }else if($ppl === 0 || $ppl === ''){//error
         $('#answer').hide();      
         $('#error').text('Please Insert a Valid Amount of People');
         $('#error').show();
       }else if($ppl == 1){//calculation
         $('#error').hide();
         $('#answer').text('Tip Amount : '+tip.toFixed(2)+'$');
         $('#answer').show();
       }else if ($ppl > 1){//calculation
         $('#error').hide();
         $('#answer').text('Tip Amount : '+dTip.toFixed(2)+'$');
         $('#answer').show();
       }
       console.log($ppl);
     }//end of calc1
    
     function calc2(){// other input
       let tip = $bill*$other;
       let dTip = tip/$ppl;
       let $otherInp = $('#other').val();
       
       if($bill.length === 0){//error
         $('#answer').hide();      
         $('#error').text('Please Insert a Valid Bill Price');
         $('#error').show();
       }else if ($bill < 0 ||$otherInp < 0 || $ppl < 0) {//error
         $('#answer').hide();      
         $('#error').text('Please Insert a Valid Number');
         $('#error').show();
       }else if ($otherInp.length === 0) {//error
         $('#answer').hide();      
         $('#error').text('Please Insert Costumed Tip Value');
         $('#error').show();
      }else if ($bill < 0 ||$otherInp < 0 || $ppl < 0) {
        console.log('two-dots');
      }else if($ppl === 0 || $ppl === ''){//error
        $('#answer').hide();      
        $('#error').text('Please Insert a Valid Amount of People');
        $('#error').show();
      }else if($ppl == 1){//calculation
         $('#error').hide();
         $('#answer').text('Tip Amount : '+tip.toFixed(2)+'$');
         $('#answer').show();
       }else if ($ppl > 1){//calculation
         $('#error').hide();
         $('#answer').text('Tip Amount : '+dTip.toFixed(2)+'$');
         $('#answer').show();
       }
     }//end of calc2
     
  if($tipOption == 1){
    calc2();
  }else {
    calc1();
  }
    
    
  });//click
      
  
});//doc ready