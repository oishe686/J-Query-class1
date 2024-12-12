let sidebar = $('.sidebar')
$("nav .sidebarBtn").click(function(){
    sidebar.addClass('active') 
})



$(".closeBtn").click(function(){
    sidebar.removeClass('active') 
})