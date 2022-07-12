const decks = () => {
  const deck = []
  for (let i = 1; i < 14; i++) {
    for (let j = 1; j < 5; j++) {
      const card = { rank: i, suit: j }
      // card.rank = i
      // card.suit = j
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
  const eightDecks = []
  eightDecks.fill(decks, 1, 416)
  let currentIndex = eightDecks.length
  let randomIdx
  while (currentIndex != 0) {
    randomIdx = Math.floor(Math.random() * eightDecks.length)
    currentIndex--
    eightDecks.copyWithin(currentIndex, randomIdx)
  }

  return eightDecks
}

exports = {
  decks,
  shaffle,
  shaffleEight
}
