export class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  makeFetch(url, method = 'GET', body = undefined) {
    if (body) {
      body = JSON.stringify(body);
    }

    return fetch(`${this.baseUrl}/${url}`, {
      method,
      headers: this.headers,
      body
    })
      .then(res => {
        if (!res.ok) {
          throw 'что-то пошло не так';
        }
        return res.json();
      })
      .catch(err => {
        console.log(err);
      });
  }

  getUser() {
    return this.makeFetch(`users/me`);
  }

  editUser(name, about) {
    return this.makeFetch(`users/me`, 'PATCH', { name, about });
  }

  getInitialCards() {
    return this.makeFetch(`cards`);
  }

  sendNewCard(name, link) {
    return this.makeFetch(`cards`, 'POST', { name, link });
  }

  like(_id) {
    return this.makeFetch(`cards/like/${_id}`, 'PUT');
  }

  deleteCard(_id) {
    return this.makeFetch(`cards/${_id}`, 'DELETE');
  }

}
