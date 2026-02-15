const friendsActivityList = document.getElementById("friends_activity_list");
const freindTemplate = document.getElementById("friend_template");
export function updateFriends() {
    const friendsData = fetch("./data/friends.json")
    .then((response) => {
        console.log(response);
        return response.json();
    })
    .then((data) => {
        console.log(data);
        for (const entry of data) {
            console.log(entry);
            addFriendActivity(entry);
        }
    })
    .catch((e) => {
        alert("Unable to load leaderboard data");
        window.location = "https://www.example.com";
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