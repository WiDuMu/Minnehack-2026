const cardsList = document.querySelector(".cards_list");
const cardTemplate = document.getElementById("card_template");

/**
 * Creates a new card in the list
 * @param {URL | string} image 
 * @param {*} date 
 * @param {*} duration 
 * @param {*} bags 
 */
export function createCard(image, date, duration, bags) {
    const neuCard = cardTemplate.content.cloneNode(true);
    const cardImage = neuCard.querySelector(".card_image");
    const cardDate = neuCard.querySelector(".card_date");
    const cardClock = neuCard.querySelector(".card_clock");
    const cardBags = neuCard.querySelector(".card_bags");
    
    cardImage.src = image;

    

    cardsList.appendChild(neuCard);
}
