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



