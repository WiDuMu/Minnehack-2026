import { createCard } from "./scripts/activityList.js";
import { updateLeaderBoard } from "./scripts/leaderboard.js";

const navActivity = document.getElementById("nav_activity");
const navLeaderboard = document.getElementById("nav_leaderboard");
const navGroup = document.getElementById("nav_group");
const navSettings = document.getElementById("nav_settings");

const tabActivity = document.getElementById("tab_activity");
const tabLeaderboard = document.getElementById("tab_leaderboard");
const tabGroup = document.getElementById("tab_group");
const tabSettings = document.getElementById("tab_settings");

let currentNav = navActivity;
let currentTab = tabActivity;

const activityDialog = document.getElementById("activity_dialog");
const openActivityDialog = document.getElementById("open_activity_dialog");
const submitActivityDialog = document.getElementById("submit_activity_dialog");
const closeActivityDialog = document.getElementById("close_activity_dialog");

const activityFileInput = document.getElementById("activity_file_input");
const activityStartTimeInput = document.getElementById("activity_start_time_input");
const activityEndTimeInput = document.getElementById("activity_end_time_input");
const activityBagsInput = document.getElementById("activity_bags_input");


openActivityDialog.addEventListener("click", () => {
    activityDialog.show();
});

submitActivityDialog.addEventListener("click", () => {
    const imageURL = URL.createObjectURL(activityFileInput.files[0]);
    const startTime = new Date(activityStartTimeInput.value);
    const endTime = new Date(activityEndTimeInput.value);
    const duration = endTime - startTime;
    const bags = new Number(activityBagsInput.value);
    createCard(imageURL, new Date(Date.now()), duration, bags);
    console.log(activityFileInput.files);
    console.log(activityStartTimeInput.value, startTime);
    console.log(activityEndTimeInput.value, endTime);
    console.log(duration);
    console.log(activityBagsInput.value);
    activityDialog.close();
});

closeActivityDialog.addEventListener("click", () => {
    activityDialog.close();
});

navActivity.addEventListener("click", () => {
    currentNav.classList.remove("active");
    currentTab.classList.remove("active");
    navActivity.classList.add("active");
    tabActivity.classList.add("active");
    currentNav = navActivity;
    currentTab = tabActivity;
});

navLeaderboard.addEventListener("click", () => {
    currentNav.classList.remove("active");
    currentTab.classList.remove("active");
    navLeaderboard.classList.add("active");
    tabLeaderboard.classList.add("active");
    currentNav = navLeaderboard;
    currentTab = tabLeaderboard;
    updateLeaderBoard();
});

navGroup.addEventListener("click", () => {
    currentNav.classList.remove("active");
    currentTab.classList.remove("active");
    navGroup.classList.add("active");
    tabGroup.classList.add("active");
    currentNav = navGroup;
    currentTab = tabGroup;
});

navSettings.addEventListener("click", () => {
    currentNav.classList.remove("active");
    currentTab.classList.remove("active");
    navSettings.classList.add("active");
    tabSettings.classList.add("active");
    currentNav = navSettings;
    currentTab = tabSettings;
});