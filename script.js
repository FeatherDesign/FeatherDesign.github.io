class TextScramble {
  constructor(el) {
    this.el = el
    this.chars = '>-_\\]{}—=+*^?#________'
    this.update = this.update.bind(this)
  }
  setText(newText) {
    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise((resolve) => this.resolve = resolve)
    this.queue = []
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({ from, to, start, end })
    }
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }
  update() {
    let output = ''
    let complete = 0
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar()
          this.queue[i].char = char
        }
        output += `<span class="dud">${char}</span>`
      } else {
        output += from
      }
    }
    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
  }
}

$('span.F').click(function(){
		$('.infoText').toggleClass('infoText_animation')
		setTimeout(function() {
			$('.infoText').removeClass('infoText_animation')
		}, 700)
		
});

var timeout = 1
var timeout2 = 2500
$('span.F').click(function(){
	
	if (timeout == 1) {
		timeout = 0;
	} else if (timeout == 0) {
		timeout = 1;
	}
	console.log('changed, yes, stop poking');
});

const phrases = [
  'Me..',
  'This is something like my personal blog.',
  'I don\'t know why I did it..',
  'but..',
  'I hope you\'ll like it   :^)'
]

const el = document.querySelector('.text')
const fx = new TextScramble(el)

let counter = 0
const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, timeout2)
  })
  counter = (counter + timeout) % phrases.length
}

next()


$('.arrowSwitcher').click(function(){

	$('.feather-container').toggleClass('feather-container_active');


	if ($('#leftContent').hasClass('leftContent_active')) {
		$('#rightContent').removeClass('rightContent_active');
		$('#rightContent').toggleClass('rightContent_activeOut');
		$('#leftContent').removeClass('leftContent_active');
		$('#leftContent').toggleClass('leftContent_activeOut');

		$('.feather-item').removeClass('feather-item_active');
		$('.feather-item').toggleClass('feather-item_activeOut');
		$('.feather-shadow').removeClass('feather-shadow_active');
		$('.feather-shadow').toggleClass('feather-shadow_activeOut');
		$('.feather-particles').removeClass('feather-particles_active');
		$('.feather-particles').toggleClass('feather-particles_activeOut');

		$('.text').removeClass('text_active');
		$('.text').toggleClass('text_activeOut');
		$('.caption').removeClass('caption_active');
		$('.caption').toggleClass('caption_activeOut');
		$('.arrowSwitcher').removeClass('arrowSwitcher_active');
		$('.arrowSwitcher').toggleClass('arrowSwitcher_activeOut');
		$('.left-Container').removeClass('left-Container_active');
		$('.left-Container').toggleClass('left-Container_activeOut');

		$('.portfolioSection').removeClass('portfolioSection_active');
		$('.portfolioSection').toggleClass('portfolioSection_activeOut');

	} else {
		$('#rightContent').toggleClass('rightContent_active');
		$('#rightContent').removeClass('rightContent_activeOut');
		$('#leftContent').toggleClass('leftContent_active');
		$('#leftContent').removeClass('leftContent_activeOut');

		$('.feather-item').toggleClass('feather-item_active');
		$('.feather-item').removeClass('feather-item_activeOut');
		$('.feather-shadow').toggleClass('feather-shadow_active');
		$('.feather-shadow').removeClass('feather-shadow_activeOut');
		$('.feather-particles').toggleClass('feather-particles_active');
		$('.feather-particles').removeClass('feather-particles_activeOut');

		$('.text').toggleClass('text_active');
		$('.text').removeClass('text_activeOut');
		$('.caption').toggleClass('caption_active');
		$('.caption').removeClass('caption_activeOut');
		$('.arrowSwitcher').toggleClass('arrowSwitcher_active');
		$('.arrowSwitcher').removeClass('arrowSwitcher_activeOut');
		$('.left-Container').toggleClass('left-Container_active');
		$('.left-Container').removeClass('left-Container_activeOut');

		$('.portfolioSection').toggleClass('portfolioSection_active');
		$('.portfolioSection').removeClass('portfolioSection_activeOut');
	}
});

$('.switches li').click(function(){
	if ($(this).hasClass('liActive')) {} else {
		$(this).toggleClass('liActive');
	}
});
$('.switches li.sites').click(function(){
	if ($('.switches .sites').hasClass('liActive')) {
		$('.arts').removeClass('liActive');
	} else {
		$('.sites').removeClass('liActive');
	}
	$('.sitesSection').toggleClass('sitesSection_active');
	$('.artsSection').removeClass('artsSection_active');
});
$('.switches li.arts').click(function(){
	if ($('.switches .arts').hasClass('liActive')) {
		$('.sites').removeClass('liActive');
	}
	$('.artsSection').toggleClass('artsSection_active');
	$('.sitesSection').removeClass('sitesSection_active');
});


