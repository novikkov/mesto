export class Popup{
    open(event) {
        function popupIsOpened(element){
            element.classList.add('popup_is-opened');
        }

        if (event.target.classList.contains('user-info__button')) {
            const popupAddCard = document.querySelector('.popup__card-add');
            popupIsOpened(popupAddCard);
            document.forms.new.reset(); 
        }
        if (event.target.classList.contains('user-info__button-edit')) {
            const popupEdit = document.querySelector('.popup__edit');
            popupIsOpened(popupEdit);
        }
        if (event.target.classList.contains('place-card__image')) {
            const popupPhoto = document.querySelector('.popup__photo');
            const popupImage = document.querySelector('.popup__image');
            popupIsOpened(popupPhoto);
            popupImage.src = event.target.style.backgroundImage.slice(5, -2);
        }
    }

    close(event){
        if (event.type === 'submit' || event.key === 'Escape'){
            event.target.closest('.popup').classList.remove('popup_is-opened');
            event.preventDefault();
        }
        if (event.target.closest('.popup__content') === null || event.target.classList.contains('popup__close')){
            event.target.closest('.popup').classList.remove('popup_is-opened');
        }
    }
}