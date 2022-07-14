const decks = () => {
  const deck = []
  for (let i = 1; i < 14; i++) {
    for (let j = 1; j < 5; j++) {
      const card = { rank: i, suit: j }
      deck.push(card)
    }
  }
  return deck
}

const shaffle = (decks) => {
  let currentIndex = decks.length
  let randomIdx
  while (currentIndex != 0) {
    randomIdx = Math.floor(Math.random() * decks.length)
    currentIndex--
    const temp = decks[currentIndex]
    decks[currentIndex] = decks[randomIdx]
    decks[randomIdx] = temp
  }

  return decks
}

const shaffleEight = (decks) => {
  let eightDecks = []
  for (let i = 0; i < 8; i++) {
    eightDecks = [...eightDecks, ...decks]
  }
  let currentIndex = eightDecks.length
  let randomIdx
  while (currentIndex != 0) {
    randomIdx = Math.floor(Math.random() * eightDecks.length)
    currentIndex--
    eightDecks.copyWithin(currentIndex, randomIdx)
  }

  return eightDecks
}

module.exports = {
  decks,
  shaffle,
  shaffleEight
}
