var n = 0;
var typeString = function(config) {

  var defaults = {
    message: "Define a message",
    speed: 100,
    delay: 0,
    element: document.querySelector('body')
  }
 
  config.message[n] = config.message[n] ? config.message[n] : defaults.message[n];
  config.speed = config.speed ? config.speed : defaults.speed;
  config.delay = config.delay ? config.delay : defaults.delay;
  //config.element = config.element ? config.element : defaults.element;
  
  var obj = config.message[n].split(""),
      stop = false,
      append_start = function(char) { config.element_start.innerHTML += char; },
      append_red = function(char) { config.element_red.innerHTML += char; },
      append_end = function(char) { config.element_end.innerHTML += char; },

      remove_start = function() {
      	var rem = config.element_start.innerHTML;
      	rem = rem.slice(0,rem.length-1);
      	config.element_start.innerHTML=rem;
      	
      },

      remove_red = function() {
      var rem = config.element_red.innerHTML;
      rem = rem.slice(0,rem.length-1);
      config.element_red.innerHTML=rem;

      },

      remove_end = function() {
      var rem = config.element_end.innerHTML;
   	  rem = rem.slice(0,rem.length-1);
      config.element_end.innerHTML=rem;

      },

      i = 0,
      j = obj.length;
	function increase () {
	  setTimeout(function() {
	    var ab = setInterval(function() {
	      /*stop = i === obj.length ? true : false;*/
	      if(i !== obj.length) {
	      	if (i<config.n1[n]) {
	          append_start(obj[i]);
	          i++;
	      	} else if(i>=config.n1[n]&&i<=config.n2[n]){
	          append_red(obj[i]);
	          i++;
	      	} else if(i>config.n2[n]){
	      	  append_end(obj[i]);
	          i++;	
	      	};
	      } else if(i === obj.length){
	  		clearInterval(ab);
	      	reduce();
	      }
	    }, config.speed);
	  }, config.delay);
	}
	function reduce () {
	  setTimeout(function() {
	    var ac = setInterval(function() {
	      if(i===-1) {
	      	clearInterval(ac);
	      	typeString(parametrs);
	      } else if(i!==-1){
	      	if (i>config.n2[n]) {
	      		remove_end();
	      		i--;
	      	} else if(i<=config.n2[n]&&i>=config.n1[n]){
	      		remove_red();
	      		i--;
	      	} else if(i<config.n1[n]){
	      		remove_start();
	      		i--;
	      	}
	      }
	    }, config.speed/2);
	  }, config.delay/2);
	}

 	increase();
 	n++;
 	if(n===config.message.length){
 		n=0;
 	};
};

var message1 = "A Front-End Web Developer.";
var message2 = "6 months experience.";
var message3 = 'Student of NTUU"KPI".';
home.className='backlight';
home.style.cursor='default';
var parametrs = {
  message: [message1,message2,message3], //string
  speed: 80, //ms
  delay: 1000, //before start
  element_start: document.querySelector('.start_typing-text'),
  element_red: document.querySelector('.red_typing-text'),
  element_end: document.querySelector('.end_typing-text'), //append to
  n1: [11,2,0],
  n2: [20,10,7]
};
typeString(parametrs);
var header_top = true;

li_about.onclick = function () {
	slides (about,li_about);
};

li_skills.onclick = function () {
	slides (skills,li_skills);
	var wrap = document.getElementsByClassName('wrap');
	wrap[0].style.width='80%';
	wrap[1].style.width='75%';
	wrap[2].style.width='55%';
	wrap[3].style.width='65%';
	wrap[4].style.width='50%';
};
li_resume.onclick = function () {
	slides (resume,li_resume);
};
li_contacts.onclick = function () {
	slides (contacts,li_contacts);
};
Request_1.onclick = function () {
	slides (request,li_contacts);
}
name_red.onclick=function () {
	document.getElementsByClassName('center')[0].classList.remove('center');
	document.getElementsByClassName('left_home')[0].classList.remove('left_home');
	header.style.top='-120px';
	header.style.opacity='0';
	header_top=true;
	setTimeout(function () {
		header.style.top='auto';
		header.style.opacity='0.9';
		header.style.bottom='0';
	},1500);
	backlight(home);
};
home.onclick=function () {
	document.getElementsByClassName('center')[0].classList.remove('center');
	document.getElementsByClassName('left_home')[0].classList.remove('left_home');
	header.style.top='-120px';
	header.style.opacity='0';
	header_top=true;
	setTimeout(function () {
		header.style.top='auto';
		header.style.opacity='0.9';
		header.style.bottom='0';
	},1500);
	backlight(home);
};

function left_home () {
	slide1.classList.add('left_home');
	links_fb.classList.add('fb_margin');
	links_fb.style.opacity='0'
};

function backlight (a) {
	var c=document.getElementsByClassName('backlight')[0];
	c.classList.remove('backlight');
	c.style.cursor='pointer';
	a.classList.add('backlight');
	a.style.cursor='default';
	links_fb.style.opacity='1';

};
function slides (li,li_) {
	var re = document.getElementsByClassName('center')[0];
	if(re!==undefined){
		re.classList.remove('center');
	}
	li.classList.add('center');
	if (header_top) {
		header_top=false;
		header.style.opacity='0';
		setTimeout(function () {
			header.style.top='-120px';
		},1000);
		setTimeout(function () {
			header.style.opacity='0.9';
			header.style.top='0';
		},1500);
	};
	left_home ();
	backlight(li_);
}


//MAP
var my_address = new google.maps.LatLng(50.44991471, 30.45343302);
var kiev = new google.maps.LatLng(50.45091894, 30.46613932);
var marker;
var map;
var image = {
  url: 'img/marker.png',

};

function initialize() {
  var mapOptions = {
    zoom: 15,
    center: kiev
  };

  map = new google.maps.Map(document.getElementById('map-canvas'),
          mapOptions);

  marker = new google.maps.Marker({
    map:map,
    draggable:false,
    animation: google.maps.Animation.DROP,
    position: my_address,
    icon: image
  });
  google.maps.event.addListener(marker, 'click', toggleBounce);
}

function toggleBounce() {

  if (marker.getAnimation() != null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

google.maps.event.addDomListener(window, 'load', initialize);


/*function submit() {
	var elem = document.createElement('h4');
	elem.innerHTML = 'Thank you, we will getback to you shortly';
	setTimeout(function  () {
		form.remove();
	 	request_rem.appendChild(elem);
	},200)
 
 }*/