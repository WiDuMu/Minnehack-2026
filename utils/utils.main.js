import { ploggingData } from '../data.js';

function leaderBoard() {
    const rankedData = ploggingData.sort((a, b) => b.trashVolume - a.trashVolume);
    return rankedData
}

leaderBoard()

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


function timePasses(start, end) {

    const startTime = new Date(`2026-02-15T${start}:00`);
    const endTime = new Date(`2026-02-15T${end}:00`);

    const totalMinutes = (endTime - startTime) / (1000 * 60);

    const hours = Math.floor(totalMinutes / 60);
    const mins = totalMinutes % 60;

    return `${hours}h:${mins}m`
}

