(function(d,b,el,q,s,x){

	el = d.createElement.bind(d);
	s = el('script');
	s.src = 'https://rawgit.com/davidshimjs/qrcodejs/master/qrcode.min.js';
	d.head.appendChild(s);
	b = d.body;
	q = el('div');
	q.setAttribute('style','position:fixed;top:50%;left:50%;z-index:1337;transform:translate(-50%,-50%);border:50px solid white;');
	q.id = 'qrCode';
	x = el('button');
	x.textContent = "REMOVE";
	x.setAttribute('style','position:absolute;cursor:pointer;top:-50px;right:-202px;background:black;color:white;border-radius:0;padding: 15px 40px;font-size:16px;font-weight:900;border:none;');
	q.appendChild(x);
	x.onclick=function(){s.remove();q.remove();};
	b.appendChild(q);
	s.onload = function(){

		new QRCode("qrCode", {
		    text: document.location.href,
	    	width: 320,
	    	height: 320,
	    	correctLevel : QRCode.CorrectLevel.M
		});	

	}

}(document));