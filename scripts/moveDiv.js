// Wait for the HTML document to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get the container element where cloned cards will be placed
    const cardPlacement = document.getElementById('card-placement');

    // Variable to store reference to the previously cloned card
    let previousCard = null;

    // Iterate over each card element
    document.querySelectorAll('.card').forEach(function (card) {
        // Add click event listener to each card
        card.addEventListener('click', function () {
            // Clone the clicked card
            // console.log("previous card is:",previousCard)
            // console.log("current card is:" ,card);
            const clonedCard = this.cloneNode(true);
           
            // Check if there's an existing card in the container
            const existingCard = cardPlacement.querySelector('.card');
            if (previousCard !== null && previousCard !== clonedCard) {
             
                previousCard.style.visibility = "visible";
            }
            // console.log("existingCard:",existingCard)
            card.style.visibility = "hidden";

            // If there's an existing card, remove it
            if (existingCard) {
                previousCard.style.visibility = "visible";
                cardPlacement.removeChild(existingCard);
            }

            // Check if the cloned card is different from the existing card
            if (existingCard !== clonedCard) {

                const hiddenCard = document.getElementById('card-home');
              
                for (i in hiddenCard.children.length){
                   
                    if (hiddenCard.children.style.visibility == "hidden"){
                        console.log(hiddenCard.children.style.visibility)
                    };
                }; 
                
             
                // If there's a previously clicked card, set its visibility to "visible"
                // Append the cloned card to the container
                cardPlacement.appendChild(clonedCard);
                card.style.visibility = "hidden";
                // Set the height of the cloned card to 100% of its parent's height
                clonedCard.style.height = "100%";
                // Add click event listener to the cloned card
                clonedCard.addEventListener('click', function () {
                    card.style.visibility = "visible";
                    // Remove the cloned card when clicked
                    cardPlacement.removeChild(clonedCard);
                });

                // Update the previousCard reference to the current cloned card
                previousCard = clonedCard;
              
               
            }
        });
    });
});