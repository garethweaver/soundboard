var myCanvas = document.createElement('canvas')
document.body.appendChild(myCanvas)

var myConfetti = confetti.create(myCanvas, {
  resize: true,
  useWorker: true
})

const clips = ['horse.ogm', 'cheesy.ogg']
const list = document.querySelector('ul')
const player = document.querySelector('audio')

clips.forEach((clip, idx) => {
  const li = document.createElement('li')
  const button = document.createElement('button')
  button.innerText = clip

  button.addEventListener('click', e => {
    player.src = `clips/${e.target.innerText}`
    player.load()
    player.play()
    myConfetti({
      particleCount: 100,
      spread: 200,
    })
  })

  li.append(button)
  list.append(li)
})
