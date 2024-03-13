const cards = document.querySelectorAll('.card');
const cardPlacement = document.getElementById('card-placement');
const prior = document.getElementById('card-home')

cards.forEach(card => {
    card.addEventListener('click', () => {
        if (card.parentElement === cardPlacement) {
            // Move the clicked card back to  prior
            prior.appendChild(card);
            cardPlacement.style.height=null;
            card.style.height = card.dataset.originalHeight;
        } else {
            // Move all cards from cardPlacement  to prior 
            if (!card.dataset.originalHeight) {
                card.dataset.originalHeight = (card.clientHeight-10) + 'px';
            }
            while (cardPlacement.firstChild) {
                
                const cardToMove = cardPlacement.firstChild;
                prior.appendChild(cardToMove);
                cardToMove.style.height = cardToMove.dataset.originalHeight;
            }
            // Move the clicked card to the cardPlacement 
            card.style.height = cardPlacement.clientHeight + 'px';
            cardPlacement.appendChild(card);
         
        }
    });
});