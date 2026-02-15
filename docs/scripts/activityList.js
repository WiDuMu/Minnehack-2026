import { seconds_to_time, time_to_seconds } from "./friendsActivity.js";
const cardsList = document.querySelector(".cards_list");
const cardTemplate = document.getElementById("card_template");

const cards = [];

export function getCards() {
    return cards;
}

export function renderCards() {
    cardsList.replaceChildren();
    for (const card of cards) {
        createCard(card.image, card.date, card.duration, card.bags);
    }
}

export function addCard(card) {
    cards.push(card);
    renderCards();
}

/**
 * Creates a new card in the list
 * @param {URL | string} image 
 * @param {Date} date 
 * @param {*} duration 
 * @param {number} bags 
 */
export function createCard(image, date, duration, bags) {
    const neuCard = cardTemplate.content.cloneNode(true);
    const cardImage = neuCard.querySelector(".card_image");
    const cardDate = neuCard.querySelector(".card_date");
    const cardClock = neuCard.querySelector(".card_clock");
    const cardBags = neuCard.querySelector(".card_bags");

    const bagsRounded = bags.toFixed(2);
    
    cardImage.src = image;
    cardDate.textContent = date.toLocaleDateString();
    cardClock.textContent = seconds_to_time(duration);
    cardBags.textContent = `${bagsRounded} bags`;

    cardsList.appendChild(neuCard);
}
