function bestTeam(player1, player2) {
    if (typeof player1 !== 'object' || typeof player2 !== 'object') {
        return "Invalid"
    }

    if (player1.foul + player1.cardY + player1.cardR < player2.foul + player2.cardY + player2.cardR) {
        return player1.name;
    }
    else if (player1.foul + player1.cardY + player1.cardR === player2.foul + player2.cardY + player2.cardR) {
        return "Tie"
    }
    else
        return player2.name;
}

player1 = { name: "Germany", foul: 12, cardY: 0, cardR: 0 }
player2 = { name: "Sweden", foul: 7, cardY: 4, cardR: 1 }
console.log(bestTeam(player1, player2))