const nameInput = document.getElementById("user_name_input");
const pfpInput = document.getElementById("pfp_file_input");
const activityGreeting = document.getElementById("activity_greeting");
const profileName = document.getElementById("profile_name");
const settingsPFP = document.getElementById("settings_pfp");
const bgButtons = document.querySelectorAll("#bg_buttons > a");

pfpInput.value = "";

let pfpURL = "./assets/single brown leaf on a little green background.jpg";
window.pfpURL = pfpURL;

nameInput.addEventListener("input", () => {
    activityGreeting.textContent = `Activity for ${nameInput.value}`;
    profileName.textContent = nameInput.value;
});

pfpInput.addEventListener("change", () => {
    if (pfpURL !== "") {
        URL.revokeObjectURL(pfpURL);
    }
    pfpURL = URL.createObjectURL(pfpInput.files[0]);
    settingsPFP.src = pfpURL;
    window.pfpURL = pfpURL;
});
console.log(bgButtons);
for (const button of bgButtons) {
    button.addEventListener("click", e => {
        const bg = e.target.parentElement.getAttribute("data_bg");
        document.body.className = "";
        document.body.className = bg;
        console.log();
    });
}



nameInput.value = "Joe Schmoe";

profileName.textContent = "Joe Schmoe";

activityGreeting.textContent = `Activity for Joe Schome`;

export {nameInput, pfpInput};