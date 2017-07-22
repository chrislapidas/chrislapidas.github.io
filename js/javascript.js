$("#profilepic").hover(function(){
  $(this).css("opacity", ".7");},
  function(){
  $(this).css("opacity", "1");
});
$(".sidebar-icon").hover(function(){
  $(this).css("opacity", ".7");},
  function(){
  $(this).css("opacity", "1");
});

$(".navbar-item").hover(function() {
  $(this).animate(
    {
      fontSize: '1.5em',
      letterSpacing: '-=1.5px'
    },
   200
  ); // end animate
}, //end function
function() {
  $(this).animate(
    {
      fontSize: '1em',
      letterSpacing: '+=1.5px'
    },
    100
  ); // end animate
}//end function
); // end hover
