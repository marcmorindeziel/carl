$(document).ready(function() {
        $("body").ezBgResize({
            img : "images/bg_club.jpg"
        });
		$('#btnLogin').click(function(){
			$('#loginBox').slideToggle(200);
		})
		$('#username').click(function(){
			$('#userBox').slideToggle(200);
		})
		$('#userBox').mouseleave(function(){
			$('#userBox').slideToggle(200);
		})
		
});