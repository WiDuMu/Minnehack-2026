const leaderboardTemplate = document.querySelector("#leaderboard_template");
const leaderboardList = document.getElementById("leaderboard_list");
export function updateLeaderBoard() {
    const leaderBoardData = fetch("./data/leaderboard.json")
	.then((response) => {
        console.log(response);
        return response.json();
    })
	.then((data) => {
        console.log(data);
        for (const entry of data) {
            console.log(entry);
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
    duration.textContent = entry.impactKm;
    bags.textContent = entry.trashVolume;
    pfp.src = "./assets/single brown leaf on a little green background.jpg";
    leaderboardList.appendChild(neuEntry);
}