function breakingRecords(scores) {
    var highestBreak = 0 
    var lowestBreak = 0 
    var currentHighestScore = scores[0] 
    var currentLowestestScore = scores[0]
    
    
    for (var i = 1; i < (scores.length); i++) {
        console.log("Round : " + i)
        if (scores[i] > currentHighestScore) { 
            currentHighestScore = scores[i]
            console.log(scores[i] + " " + currentHighestScore)
            highestBreak++ 
            console.log("highestBreak : " + highestBreak)
        } else if (scores[i] < currentLowestestScore) { 
            currentLowestestScore = scores[i]
            console.log(scores[i] + " " + currentLowestestScore)
            lowestBreak++ 
            console.log("lowestBreak : " + lowestBreak)
        } else {
            console.log("Nothing Happened")
        }
    }
    
    console.log(highestBreak + " " + lowestBreak)
    // return [highestBreak, lowestBreak];
}

scores = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42]
breakingRecords(scores)