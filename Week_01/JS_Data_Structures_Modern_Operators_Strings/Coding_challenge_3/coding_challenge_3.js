const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '🔶 Yellow card'],
  ]);

// 1.
const events = [...new Set(gameEvents.values())]
console.log('Các sự kiện:', events)

// 2.
gameEvents.delete(64)
console.log('Nhật ký sự kiện sau khi xóa phút 64:', gameEvents)

// 3.
const totalMinutes = 90
const averageEventTime = totalMinutes/gameEvents.size
console.log(`Một sự kiện đã diễn ra, trung bình, cứ ${averageEventTime.toFixed(2)} phút lại có một sự kiện.`)


// 4.
for (const [minute, event] of gameEvents) {
    const half = minute <= 45 ? 'FIRST HALF' : 'SECOND HALF'
    console.log(`[${half}] ${minute}: ${event}`)
}