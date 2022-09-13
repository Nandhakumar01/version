tournament = [{ TeamID: "MI", Team: "Mumbai", Rank: 1 },
{ TeamID: "CSK", Team: "Chennai", Rank: 2 },
{ TeamID: "KKR", Team: "Kolkata", Rank: 3 },
{ TeamID: "DC", Team: "Delhi", Rank: 4 },
{ TeamID: "RR", Team: "Rajasthan", Rank: 5 },
{ TeamID: "SRH", Team: "Hyderabad", Rank: 6 },
{ TeamID: "GT", Team: "Gujarat", Rank: 7 },
{ TeamID: "PK", Team: "Punjab", Rank: 8 }]
function probability(team1, team2) {
    team1Rank = findingRankByUsingName(team1)
    team2Rank = findingRankByUsingName(team2)
    lo = Math.random().toFixed(2)
    x = 0, y = 0
    if (lo > 0.5) {
        x = lo
        y = (1 - x).toFixed(2)
    } else {
        y = lo
        x = (1 - y).toFixed(2)
    }
    if (team1Rank < team2Rank & x >= 0.45) {
        return team1
    }
    else {
        return team2
    }
}
match = []
for (i = 0; i < tournament.length / 2; i++) {
    match.push([tournament[i].Team, tournament[tournament.length - 1 - i].Team])
}
poolA = []
poolB = []
for (i in match) {
    if (i % 2 == 0) {
        poolA.push(match[i])
    }

    else {
        poolB.push(match[i])
    }
}
for (i of poolB.reverse()) {
    poolA.push(i)
}
z = 0
winners = []
function winner() {
    poolAWinners = []
    winnerslist = []
    for (i = 0; i < poolA.length; i = i + 2) {
        l = []
        d = i + 1
        e = i + 2
        ob1 = {}
        ob2 = {}
        a = probability(poolA[i][0], poolA[i][1])
        ob1["MatchNo"] = d
        ob1["Match"] = poolA[i][0] + " vs " + poolA[i][1]
        ob1["MatchId"] = poolA[i][0].toLowerCase().slice(0, 2) + findingRankByUsingName(poolA[i][0]) + poolA[i][1].toLowerCase().slice(0, 2) + findingRankByUsingName(poolA[i][1])
        ob1["Winner"] = a
        b = probability(poolA[i + 1][0], poolA[i + 1][1])
        ob2["MatchNo"] = e
        ob2["Match"] = poolA[i + 1][0] + " vs " + poolA[i + 1][1]
        ob2["MatchId"] = poolA[i + 1][0].toLowerCase().slice(0, 2) + findingRankByUsingName(poolA[i + 1][0]) + poolA[i + 1][1].toLowerCase().slice(0, 2) + findingRankByUsingName(poolA[i + 1][1])
        ob2["Winner"] = b
        l.push(a)
        l.push(b)
        poolAWinners.push(l)
        winnerslist.push(ob1)
        winnerslist.push(ob2)
    }
    winners.push(winnerslist)
    poolA = poolAWinners
    while (poolA.length != 1) {
        winner()
    }
    if (poolAWinners.length == 1) {
        return poolAWinners
    }
}
finalRound = winner()
function findingRankByUsingName(teamName) {
    rank = 0;
    tournament.forEach(element => {
        if (element.Team == teamName) {
            rank = element.Rank
        }
    });
    return rank
}
final = {}
final["MatchNo"] = "Final"
final["Match"] = finalRound[0][0] + " vs " + finalRound[0][1]
final["MatchId"] = finalRound[0][0].toLowerCase().slice(0, 2) + findingRankByUsingName(finalRound[0][0]) + finalRound[0][1].toLowerCase().slice(0, 2) + findingRankByUsingName(finalRound[0][1])
final["Winner"] = finalRound[0][Math.floor(Math.random() * 2)]
winners.push([final])
count = 1
winners.forEach(element => {
    console.log("Round", count)
    console.table(element)
    count++
});