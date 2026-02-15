const friendsActivityList = document.getElementById("friends_activity_list");
const freindTemplate = document.getElementById("friend_template");
const groupHeading = document.getElementById("group_heading");
import { nameInput } from "./profileSettings.js";

/**
 * Returns the given time in seconds
 * @param {string} time 
 * @returns {number}
 */
export function time_to_seconds(time) {
    const hs = time.split(":");
    return (parseInt(hs[0], 10) * 3600) + (parseInt(hs[1], 10) * 60);
}

/**
 * Returns the seconds in time
 * @param {number} seconds 
 * @returns {string}
 */
export function seconds_to_time(seconds) {
    if (seconds <= 0) {
        seconds = 0;
    }
    return `${Math.floor(seconds / 3600)}:${Math.floor((seconds % 3600) / 60)}`;
}

export function updateFriends(cards) {
    const friendsData = fetch("./data/friends.json")
    .then((response) => {
        console.log(response);
        return response.json();
    })
    .then((data) => {
        console.log(data);
        let totalTime = 0;
        let totalBags = 0;
        let userWeeklyTime = 0;
        let userWeeklyBags = 0;
        for (const card of cards) {
            totalTime += card.duration;
            userWeeklyTime += card.duration;
            totalBags += card.bags;
            userWeeklyBags += card.bags;
        }
        friendsActivityList.replaceChildren();
        if (cards.length > 0) {
            console.log(cards);
            const activity = {
                name: nameInput.value,
                pfpSrc: window.pfpURL,
                imgSrc: cards[cards.length - 1].image,
                recentTime: seconds_to_time(cards[cards.length - 1].duration),
                recentBags: cards[cards.length -1].bags,
                weeklyTime: seconds_to_time(userWeeklyTime),
                weeklyBags: userWeeklyBags,
            };
            addFriendActivity(activity);
        }
        for (const entry of data) {
            totalTime += time_to_seconds(entry.weeklyTime);
            totalBags += entry.weeklyBags;
            addFriendActivity(entry);
        }
        groupHeading.textContent = `This week you and your friends spent ${seconds_to_time(totalTime)}, and cleaned up ${totalBags} bags!`;
    })
    .catch((e) => {
        alert("Unable to load leaderboard data");
        console.error(e);
    });
}


export function addFriendActivity(friend) {
    console.log(friend);
    const neuEntry = freindTemplate.content.cloneNode(true);
    const name = neuEntry.querySelector(".name");
    const friendPfp = neuEntry.querySelector(".friend_pfp");
    const recentTime = neuEntry.querySelector(".recent_time");
    const recentBags = neuEntry.querySelector(".recent_bags");
    const weeklyTime = neuEntry.querySelector(".weekly_time");
    const weeklyBags = neuEntry.querySelector(".weekly_bags");
    const activityImage = neuEntry.querySelector(".friend_activity_image");

    name.textContent = friend.name;
    friendPfp.src = friend.pfpSrc;
    recentTime.textContent = friend.recentTime;
    recentBags.textContent = friend.recentBags;
    weeklyTime.textContent = friend.weeklyTime;
    weeklyBags.textContent = friend.weeklyBags;
    activityImage.src = friend.imgSrc;

    friendsActivityList.appendChild(neuEntry);
}