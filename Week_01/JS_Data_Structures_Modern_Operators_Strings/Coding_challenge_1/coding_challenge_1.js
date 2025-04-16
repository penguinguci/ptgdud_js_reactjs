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
const [players1, players2] = game.players

// 2.
const [gk, ...fieldPlayers] = players1

// 3.
const allPlayers = [...players1, ...players2]

// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']

// 5.
const {team1, draw, team2} = game.odds

// 6. truyền vào không phải mảng: 'Davies', 'Muller', 'Lewandowski', 'Kimmich'
const printGoals = (...players) => {
    console.log(`${players.length} goals were scored.`)
    players.forEach(player => console.log(player))
}

// test
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich')
printGoals(...game.scored)


// 7.
console.log(
    (team1 < team2 && game.team1) || (team2 < team1 && game.team2) || 'Draw'
)