export default class ApiService {

  _apiBase = 'http://krosi.todozzle.com/api';

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

  getModels = async (goodId) => {
    const res = await this.getResource(`/goods/${goodId}/models`);
    return res;
  }


}

/*
JSON.stringify ({
  userId: body.userId,
  size: body.size,
  gender: body.gender
})*/
