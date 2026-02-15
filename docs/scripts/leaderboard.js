import { seconds_to_time } from "./friendsActivity.js";
import { nameInput,  } from "./profileSettings.js";
const leaderboardTemplate = document.querySelector("#leaderboard_template");
const leaderboardList = document.getElementById("leaderboard_list");
export function updateLeaderBoard(cards) {
    console.log("cards: ", cards);
    const leaderBoardData = fetch("./data/leaderboard.json")
	.then((response) => {
        console.log(response);
        return response.json();
    })
	.then((data) => {
        let userTime = 0;
        let userBags = 0;
        for (const card of cards) {
            console.log(card, userTime, userBags);
            userTime += card.duration;
            userBags += card.bags;
            console.log(card, userTime, userBags);
        }
        
        data.push({
            id: 0,
            pfpSrc: window.pfpURL,
            ploggerName: nameInput.value,
            trashVolume: userBags,
            hours: userTime / 3600,
        })
        leaderboardList.replaceChildren();
        data = data.sort((a, b) => 
            a.trashVolume < b.trashVolume
        );
        console.log(data);
        for (const entry of data) {
            addLeaderBoardEntry(entry);
        }
    })
	.catch((e) => {
		alert("Unable to load leaderboard data");
        console.error(e);
	});
}

/** 
 * @typedef {Object} Entry
 * @property {}
 */

/**
 * 
 * @param {Entry[]} entries 
 */
function addLeaderBoardEntry(entry) {
    const neuEntry = leaderboardTemplate.content.cloneNode(true);
    const name = neuEntry.querySelector(".leaderboard_name");
    const duration = neuEntry.querySelector(".leaderboard_duration");
    const bags = neuEntry.querySelector(".leaderboard_bags");
    const pfp = neuEntry.querySelector(".leaderboard_pfp");

    name.textContent = entry.ploggerName;
    duration.textContent = seconds_to_time(entry.hours * 3600);
    bags.textContent = entry.trashVolume.toFixed(1);
    pfp.src = entry.pfpSrc;
    leaderboardList.appendChild(neuEntry);
}