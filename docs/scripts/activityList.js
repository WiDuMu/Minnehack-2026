const cardsList = document.querySelector(".cards_list");
const cardTemplate = document.getElementById("card_template");

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

    let bagsRounded = bags.toFixed(2);
    
    cardImage.src = image;
    cardDate.textContent = date.toLocaleDateString();
    cardClock.textContent = duration;
    cardBags.textContent = `${bagsRounded} bags`;




    cardsList.appendChild(neuCard);
}
