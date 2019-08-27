export default class ApiService {

  _apiBase = 'https://krosi.todozzle.com/api';

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json();
  };

  loadSetting = async (id) => {
    const res = await this.getResource(`/settings/${id}`);
    return res;
  };

  saveSetting = async (id, body) => {
    await fetch(`${this._apiBase}/settings/${id}`, {
      method: 'POST',
      body: body
    })
  };

  getProducts = async (userId) => {
    const res = await this.getResource(`/shoes?userId=${userId}`);
    return res;
  }


}

/*
JSON.stringify ({
  userId: body.userId,
  size: body.size,
  gender: body.gender
})*/
