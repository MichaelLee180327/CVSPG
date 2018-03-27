//effect:
//none, rotateplane, stretch, orbit, roundBounce, win8,
//win8_linear, ios, facebook, rotation, timer, pulse,
//progressBar, bouncePulse or img

//textPos: 'vertical'or 'horizontal'


function run_waitMe(el, effect, text, maxSize, textPos, fontSize){
	
	el.waitMe({
		effect: effect,
		text: text,
		bg: 'rgba(192,192,192,0.7)',
		color: '#990066',
		maxSize: maxSize,
		waitTime: -1,
		source: 'image/img.svg',
		textPos: textPos,
		fontSize: fontSize,
		onClose: function(el) {}
	});
}