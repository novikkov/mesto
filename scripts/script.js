(() =>{
    const placesList = document.querySelector('.places-list');
    const popupAddCard = document.querySelector('.popup__card-add');
    const popupEdit = document.querySelector('.popup__edit');
    const popupPhoto = document.querySelector('.popup__photo');
    const form = document.querySelector('.popup__form');
    const formEdit = document.querySelector('.popup__form-edit');
    const buttonEdit = document.querySelector('.user-info__button-edit');
    const userInfoContainer = document.querySelector('.user-info');
    const submitEdit = document.querySelector('.popup__button-edit');
    const submitAdd = document.querySelector('.popup__button-add');

    const card = new Card();

    const api = new Api({
      baseUrl: 'https://praktikum.tk/cohort8',
      headers: {
        authorization: '98e5e621-4524-4495-81f3-e463b5768eed',
        'Content-Type': 'application/json'
      }
    });

    const userInfo = new UserInfo(userInfoContainer, api);

    const cardList = new CardList(placesList, card, api, userInfo);
    
    const popup = new Popup();

    const formValidator = new FormValidator(form);
    formValidator.setEventListeners();

    const formEditValidator = new FormValidator(formEdit);
    formEditValidator.setEventListeners();

    Promise.all([
      api.getInitialCards(),
      api.getUser()
    ])
      .then(([initialCards, user]) => {
        userInfo.setUserInfo(user._id, user.name, user.about);
        userInfo.updateUserInfo(user.name, user.about);
        cardList.render(initialCards);
      });

    // слушатели

    // открытие попап
    document.addEventListener('click', popup.open);
    // закрытие попапа добавления карточек
    popupAddCard.addEventListener('click', popup.close);
    popupAddCard.addEventListener('keydown', popup.close);
    // закрытие попапа с картинкой
    popupPhoto.addEventListener('click', popup.close);
    // закрытие попапа редактирования
    popupEdit.addEventListener('click', popup.close);
    popupEdit.addEventListener('keydown', popup.close);

    // редактирование профиля
    popupEdit.addEventListener('submit', (event) => {
      event.preventDefault();
      submitEdit.textContent = 'Загрузка...';
      userInfo.updateUserInfo(
        event.target.querySelector('.name-edit').value,
        event.target.querySelector('.about-edit').value
      )
        .then(({ id, name, about }) => {
          userInfo.setUserInfo(id, name, about);
          submitEdit.textContent = 'Сохранить';
          popup.close(event);
        })
    });

    buttonEdit.addEventListener('click', function() {
      // userInfo.setUserInfo.bind(userInfo);
      document.querySelector('#error-username').textContent = '';
      document.querySelector('#error-about').textContent = '';
      document.querySelector('.name-edit').textContent = '';
      document.querySelector('.about-edit').textContent = '';
      document.querySelector('.popup__button-edit').disabled = false;
    });

    // добавление карточки
    document.forms.new.addEventListener('submit', function(event){
      event.preventDefault();
      submitAdd.textContent = 'Загрузка...';
      const name = event.target.querySelector('.popup__input_type_name').value;
      const link = event.target.querySelector('.popup__input_type_link-url').value;
      api.sendNewCard(name, link)
        .then((card)=>{
          cardList.addCard(card);
          submitAdd.textContent = '+';
          popup.close(event);
        })
    });
})();
