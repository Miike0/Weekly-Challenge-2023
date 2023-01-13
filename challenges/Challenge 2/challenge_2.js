

function tennisGame (score) {
    const scoreGame = {
        scores : {
            0 : 'Love',
            1: 15,
            2: 30,
            3: 40,
        },
        tie: 'Deuce',
        p1Lead: 'P1 lead the game',
        p2Lead: 'P2 lead the game',
        p1Won: 'P1 Won the game',
        p2Won: 'P2 Won the game',
    }

    const scorePlayers = {
        p1 : 0,
        p2 : 0,
    }

    let pointToWin = false;
    const scoreKeys = Object.keys(scoreGame.scores);

    score.forEach((element, index) => {
            if (element.toLowerCase() === 'p1') {
                scorePlayers.p1++; 
            } else if (element.toLowerCase() === 'p2') {
                scorePlayers.p2++;
            }
            if (scorePlayers.p1 != parseInt(scoreKeys[3]) || scorePlayers.p2 != parseInt(scoreKeys[3])) {
                if ((scorePlayers.p1 <= parseInt(scoreKeys[3]) && scorePlayers.p2 <= parseInt(scoreKeys[3]))) {
                    let p1Score = 0, p2Score = 0;
                    for (const s in scoreGame.scores) {
                        if (scorePlayers.p1 == s) {
                            p1Score = s;                    
                        }
                        if (scorePlayers.p2 == s) {
                            p2Score = s;
                        }
                    }
    
                    console.log(`${scoreGame.scores[p1Score]} : ${scoreGame.scores[p2Score]}`)
                    
                }
            }
            else if ((scorePlayers.p1 === scorePlayers.p2) && (scorePlayers.p1 > parseInt(scoreKeys[2]) && scorePlayers.p2 > parseInt(scoreKeys[2]))) {
                console.log(scoreGame.tie)
            }
            if ((scorePlayers.p1 > scorePlayers.p2) && (scorePlayers.p1 > parseInt(scoreKeys[3])) && !pointToWin) {
                pointToWin = true;
                console.log(scoreGame.p1Lead);

            } else if ((scorePlayers.p2 > scorePlayers.p1) && (scorePlayers.p2 > parseInt(scoreKeys[3])) && !pointToWin) {
                pointToWin = true;
                console.log(scoreGame.p2Lead);
            }
            if (pointToWin) {
                return;
            }

    });
    if (scorePlayers.p1 > scorePlayers.p2) {
        console.log(scoreGame.p1Won)
    }else if (scorePlayers.p2 > scorePlayers.p1) {
        console.log(scoreGame.p2Won)
    }
    
}

function main() {
    let test = tennisGame( ['P1', 'P1', 'P2', 'P2', 'P1', 'P2', 'P1', 'P1'] );

    test = tennisGame( ['P2', 'P2', 'P1', 'P1', 'P2', 'P1', 'P2', 'P2'] );
}
main();
