class CardList {
    constructor(container, card, api, userInfo){
        this.container = container;
        this.card = card;
        this.api = api;
        this.userInfo = userInfo;
        this.container.addEventListener('click', this.eventHandler.bind(this));
    }

    addCard(card){
        const element = this.card.create(card);
        this.card.updateLikesCount(element, card.likes.length);
        // if(card.likes.find((like) => like.owner._id === this.userInfo._id)){
        //     this.card.updateLikesCount();
        // }
        this.container.appendChild(element);
        // return this.api.sendNewCard(name, link);

    }
    
    render(initCards){
        for(const element of initCards){
          this.addCard(element);
        }
    }
    eventHandler(event){
        if(event.target.classList.contains('place-card__like-icon')){
            this.card.like(event);
        }
        this.card.remove(event);
    }

}

