class Card {
  constructor(card, { handleCardClick, handleDeleteCard, handleLikeCard }, templateSelector) {
    this._card = card
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick
    this._handleDeleteCard = handleDeleteCard
    this._handleLikeCard = handleLikeCard
  }

  _getCardTemplate() {
    const cardTemplate = document
      .querySelector(this._templateSelector)
      .content.querySelector(".photo-grid")
      .cloneNode(true);

    return cardTemplate;
  }

  generateCard() {

    this._template = this._getCardTemplate()

    const cardImage = this._template.querySelector(".photo-grid__photo")
    const deleteButton = this._template.querySelector(".photo-grid__delete");
    const likeButton = this._template.querySelector(".photo-grid__heart");
    const cardTitle = this._template.querySelector(".photo-grid__title");
    const likeCount = this._template.querySelector(".photo-grid__like-count");
    if (this._card.owner._id !== 'dfe326a7bc47ff5776017a43') {
      deleteButton.style.display = 'none';
    }

    cardImage.src = this._card.link;
    cardTitle.alt = `Photo of ${this._card.name}`;
    cardTitle.textContent = this._card.name;
    likeCount.textContent = this._card.likes.length;
    this._template.id = this._card._id

    this._card.likes.filter(function (like) {
      if (like._id === 'dfe326a7bc47ff5776017a43') { likeButton.classList.add("photo-grid__heart_clicked") }
    })


    likeButton.addEventListener('click', (e) => {
      this._handleLikeCard(e)
    })

    deleteButton.addEventListener('click', (e) => {
      this._handleDeleteCard(e)
    })

    cardImage.addEventListener('click', (e) => {
      this._handleCardClick(e)
    })
    
    return this._template;
  };
}

export default Card;