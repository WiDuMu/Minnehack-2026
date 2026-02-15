const friendsActivityList = document.getElementById("friends_activity_list");
const freindTemplate = document.getElementById("friend_template");
const groupHeading = document.getElementById("group_heading");

/**
 * Returns the given time in seconds
 * @param {string} time 
 * @returns {number}
 */
function time_to_seconds(time) {
    const hs = time.split(":");
    return (parseInt(hs[0]) * 3600) + (parseInt(hs[1] * 60));
}

/**
 * Returns the seconds in time
 * @param {number} seconds 
 * @returns {string}
 */
function seconds_to_time(seconds) {
    return `${Math.floor(seconds / 3600)}:${Math.floor((seconds % 3600) / 60)}`;
}

export function updateFriends() {
    const friendsData = fetch("./data/friends.json")
    .then((response) => {
        console.log(response);
        return response.json();
    })
    .then((data) => {
        console.log(data);
        let totalTime = 0;
        let totalBags = 0;
        friendsActivityList.replaceChildren();
        for (const entry of data) {
            totalTime += time_to_seconds(entry.weeklyTime);
            totalBags += entry.weeklyBags;
            addFriendActivity(entry);
        }
        groupHeading.textContent = `This week you and your friends spent ${seconds_to_time(totalTime)}, and cleaned up ${totalBags} bags!`;
        console.log(totalTime, totalBags)
    })
    .catch((e) => {
        alert("Unable to load leaderboard data");
        console.error(e);
    });
}


export function addFriendActivity(friend) {
    const neuEntry = freindTemplate.content.cloneNode(true);
    const name = neuEntry.querySelector(".name");
    const recentTime = neuEntry.querySelector(".recent_time");
    const recentBags = neuEntry.querySelector(".recent_bags");
    const weeklyTime = neuEntry.querySelector(".weekly_time");
    const weeklyBags = neuEntry.querySelector(".weekly_bags");
    const activityImage = neuEntry.querySelector(".friend_activity_image");

    name.textContent = friend.name;
    recentTime.textContent = friend.recentTime;
    recentBags.textContent = friend.recentBags;
    weeklyTime.textContent = friend.weeklyTime;
    weeklyBags.textContent = friend.weeklyBags;
    activityImage.src = friend.imgSrc;

    friendsActivityList.appendChild(neuEntry);
}