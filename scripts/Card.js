class Card {
    like(event){
            event.target.classList.toggle('place-card__like-icon_liked');
    }

    remove(event){
        if (event.target.classList.contains('place-card__delete-icon')) {
            const card = event.target.closest('.place-card');
            card.remove();
        }
    }

    create(card) {
        const template = `
                      <div class="place-card">
                        <div class="place-card__image" style="background-image: url(${card.link})">
                          <button class="place-card__delete-icon"></button>
                        </div>
                        <div class="place-card__description">
                          <h3 class="place-card__name">${card.name}</h3>
                          <div class="place-card__like-container">
                            <button class="place-card__like-icon"></button>
                            <div class="place-card__like-counter"></div>
                          </div>
                        </div>
                      </div>`;
        
        const cardContainer = document.createElement('div');
        cardContainer.insertAdjacentHTML('beforeend', template);
        // cardContainer.dataset.cardId = card._id;
        return cardContainer.firstElementChild;
    }

    // setLike(){
    //   event.target.classList.add('place-card__like-icon_liked');
    // }

    updateLikesCount(element, count){
        element.querySelector('.place-card__like-counter').textContent = count;
    }
}