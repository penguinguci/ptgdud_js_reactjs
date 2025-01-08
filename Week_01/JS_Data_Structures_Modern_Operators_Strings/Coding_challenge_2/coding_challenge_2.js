const game = {
    team1: 'Bayern Munich',
    team2: 'Borussia Dortmund',
    players: [
        ['Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Gnabry', 'Muller', 'Lewandowski', 'Coman'],
        ['Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Reus']
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnabry', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        draw: 3.25,
        team2: 6.5
    }
}


// 1.
game.scored.forEach((player, index) => {
    console.log(`Bàn thắng ${index + 1}: ${player}`)
})

// 2.
const odds = Object.values(game.odds)
const averageOdds = odds.reduce((sum, odd) => sum + odd, 0)/odds.length
console.log(`Tỷ lệ cược trung bình: ${averageOdds.toFixed(2)}`)


// 3.
for (const [team, odd] of Object.entries(game.odds)) {
    const teamName = team === 'draw' ? 'hòa' : `chiến thắng ${game[team]}`
    console.log(`Tỷ lệ cược ${teamName}: ${odd.toFixed(2)}`)
}

// 4.
const scorers = {}
game.scored.forEach(player => {
    scorers[player] = (scorers[player] || 0) + 1
})
console.log('Scorers:', scorers)