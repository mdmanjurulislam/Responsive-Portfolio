$(function(){
    // counter up start
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    // counter up end

	// portfolio start
	new VenoBox({
		selector: '.my-video-links',
	});
	// portfolio end

	// progress bar start
	$('#html').LineProgressbar({
		percentage: 98,
		fillBackgroundColor: '#142eb5',
		backgroundColor: '#dee1e6',
		radius: '10px',
		height: '8px',
		width: '85%'
	  });
	$('#css').LineProgressbar({
		percentage: 95,
		fillBackgroundColor: '#142eb5',
		backgroundColor: '#dee1e6',
		radius: '10px',
		height: '8px',
		width: '85%'
	  });
	$('#bootstrap').LineProgressbar({
		percentage: 80,
		fillBackgroundColor: '#142eb5',
		backgroundColor: '#dee1e6',
		radius: '10px',
		height: '8px',
		width: '85%'
	  });
	$('#jquery').LineProgressbar({
		percentage: 45,
		fillBackgroundColor: '#142eb5',
		backgroundColor: '#dee1e6',
		radius: '10px',
		height: '8px',
		width: '85%'
	  });
	$('#javascript').LineProgressbar({
		percentage: 30,
		fillBackgroundColor: '#142eb5',
		backgroundColor: '#dee1e6',
		radius: '10px',
		height: '8px',
		width: '85%'
	  });
	$('#python').LineProgressbar({
		percentage: 40,
		fillBackgroundColor: '#142eb5',
		backgroundColor: '#dee1e6',
		radius: '10px',
		height: '8px',
		width: '85%',
	  });
	// progress bar end

	// wow animation start
	new WOW().init();
	// wow animation end

	// portfolio slider start
	$('.port-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		dots:true,
		arrows:false
	  });
	// portfolio slider end

	// back to top start
	$(window).scroll(function(){
		let scrollingValue=$(this).scrollTop();
		console.log(scrollingValue);
		if(scrollingValue > 200){
			$("#backToTop").addClass('showbtn')
		}else{
			$("#backToTop").removeClass('showbtn')
		}

		if(scrollingValue > 0){
			$(".nav-main").addClass("stickyNav")
		}else{
			$(".nav-main").removeClass("stickyNav")
		}
	})
	$("#backToTop").click(function(){
		$('html,body').animate({
			scrollTop:0
		})
	})
	// back to top end

	// preloader start
	$(window).on("load",function(){
		$("#preloader").delay(200).fadeOut(1000)
	})
	// preloader end








	// type js start
    $(".typed").typed({
		strings: ["Frontend Developer", "Frontend Designer", "Python Programmer"],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: false,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
    // type js end
})