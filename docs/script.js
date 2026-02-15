import { createCard } from "./scripts/activityList.js";

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
const closeActivityDialog = document.getElementById("close_activity_dialog");

openActivityDialog.addEventListener("click", () => {
    activityDialog.show();
    createCard("./assets/1h_suburban_plogging_Frantorp_VastraGotaland_Sweden_May31_2020.jpg", new Date(Date.now()), "1:00", Math.random());
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