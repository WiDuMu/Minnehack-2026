import { ploggingData } from '../data.js';

// Sorting logic (Highest Trash in Liter first)
function leaderBoard() {
    const rankedData = ploggingData.sort((a, b) => b.trashVolume - a.trashVolume);
    return rankedData
}

leaderBoard()

// Comunity status
function totalKms() {
    const total = ploggingData.reduce((acc, currentPlog) => {
        return acc + currentPlog.impactKm
    }, 0)

    return total
}

function totalVolume() {
    const total = ploggingData.reduce((acc, currentPlog) => {
        return acc + currentPlog.trashVolume;
    }, 0)

    return total
}


function postNewPlog(name, km, volume) {
    const newEntry = {
        id: ploggingData.length + 1,
        ploggerName: name,
        impactKm: km,
        trashVolume: volume,
        imgUrl: "/assets/placeholder.jpg",
        timeStamp: new Date()
    }

    ploggingData.push(newEntry)
    console.log("Plog posted successfully!")

    return newEntry;
}

function serachPlogger(query) {
    if (!query) return ploggingData;

    const term = query.toLowerCase();

    return ploggingData.filter(plogger =>
        plogger.ploggerName.toLowerCase().includes(term)
    );
}

const result = postNewPlog("varshith", 10.2, 1)
console.log(result)
console.log(ploggingData)