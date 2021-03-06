export default class Api {
    constructor(options) {
        this.options = options;
    }

    getUserInfo() {
        return fetch(`${this.options.baseUrl}/users/me`, {
            headers: this.options.headers,
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(`Error: ${res.status}`);
                }
            })
    }

    changeUserInfo({ name: newName, about: newAbout }) {
        return fetch(`${this.options.baseUrl}/users/me`, {
            method: "PATCH",
            headers: this.options.headers,
            body: JSON.stringify({ name: newName, about: newAbout })
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(`Error: ${res.status}`);
                }
            });
    }

    changeUserPic({ avatar: newUrl }) {
        return fetch(`${this.options.baseUrl}/users/me/avatar`, {
            method: "PATCH",
            headers: this.options.headers,
            body: JSON.stringify({ avatar: newUrl })
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(`Error: ${res.status}`);
                }
            });
    }

    getInitialCards() {
        return fetch(`${this.options.baseUrl}/cards`, {
            headers: this.options.headers,
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(`Error: ${res.status}`);
                }
            });
    }

    addNewCard({ name: newName, link: newLink }) {
        return fetch(`${this.options.baseUrl}/cards`, {
            method: "POST",
            headers: this.options.headers,
            body: JSON.stringify({ name: newName, link: newLink })
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(`Error: ${res.status}`);
                }
            });
    }

    deleteCard(cardId) {
        return fetch(`${this.options.baseUrl}/cards/${cardId}`, {
            method: "DELETE",
            headers: this.options.headers,
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(`Error: ${res.status}`);
                }
            });
    }

    unlikeCard(cardData, userId) {
        return fetch(`${this.options.baseUrl}/cards/likes/${cardData._id}`, {
            method: "DELETE",
            headers: this.options.headers,
        })

            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(`Error: ${res.status}`);
                }
            });
    }

    likeCard(cardData) {
        return fetch(`${this.options.baseUrl}/cards/likes/${cardData._id}`, {
            method: "PUT",
            headers: this.options.headers,
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(`Error: ${res.status}`);
                }
            });
    }

}