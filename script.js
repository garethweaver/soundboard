const myCanvas = document.createElement('canvas')
document.body.appendChild(myCanvas)

const myConfetti = confetti.create(myCanvas, {
  resize: true,
  useWorker: true
})

const intermissions = [
  'boom-boom.mp3',
  'hold-music-3min.mp3',
  'intermission-1.mp3',
  'intermission-2.mp3',
  'intermission-3.mp3',
  'catchphrase-theme.mp3',
  'countdown-theme.mp3',
  'bbc-3min.mp3',
  'im-out.mp3',
]

const buzzers = [
  'correct-ding-ding-ding.mp3',
  'wrong.wav',
  'wrong-bass.wav',
]

const walkups = [
  'rick-roll.mp3',
  'john-cena.mp3',
]

const voice = [
  'voice-bonus-points.mp3',
  'voice-correct-answer.mp3',
  'voice-yay.mp3',
  'voice-you-suck.mp3',
  'voice-boo.mp3',
  'voice-emotional-damage.mp3',
]

const gameshow = [
  'tense-music-A-1mins.mp3',
  'tense-music-B-1mins.mp3',
  'tense-music-C-3.5mins.mp3',
  'countdown-30s-jazz.mp3',
  'countdown-30s.mp3',
]

const audience = [
  'audience-applause.mp3',
  'audience-applause-woop.mp3',
  'audence-applause-woop-woop.mp3',
  'audience-clapping-reserved.mp3',
  'audience-laughing.mp3',
  'audience-laugh-so-bad.mp3',
  'audience-laughter-basic.mp3',
]

const cuts = [
  'jazzy-cut.mp3',
  'short-trumpets-hype.mp3',
  'bob-ross-theme.mp3',
]

const container = document.querySelector('.categories')
const player = document.querySelector('audio')

const categories = [
  {title: 'intermissions', clips: intermissions },
  {title: 'buzzers', clips: buzzers },
  {title: 'voice', clips: voice },
  {title: 'gameshow', clips: gameshow },
  {title: 'audience', clips: audience },
  {title: 'walkups', clips: walkups },
  {title: 'cuts', clips: cuts },
]

categories.forEach((category) => {
  const cat = document.createElement('div')
  const title = document.createElement('h3')
  const list = document.createElement('ul')
  title.innerText = category.title
  cat.append(title)

  category.clips.forEach((clip, idx) => {
    const li = document.createElement('li')
    const button = document.createElement('button')
    button.innerText = clip

    button.addEventListener('click', e => {
      player.src = `clips/${category.title}/${e.target.innerText}`
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

  cat.append(list)
  container.append(cat)
})

