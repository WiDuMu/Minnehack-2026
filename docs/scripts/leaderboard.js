export function updateLeaderBoard() {
    const leaderBoardData = fetch("./data/leaderboard.json")
	.then((response) => response.json())
	.then((data) => {
        console.log(data);
    })
	.catch(() => {
		alert("Unable to load leaderboard data");
	});
}