import axios from 'axios';

export interface HttpAdapter {
  get<T>(url: string): Promise<T>;
}

export class PokeApiFetchAdapter implements HttpAdapter {

  async get<T>(url: string): Promise<T> {
    const resp = await fetch(url);
    const data = await resp.json()
    return data;
  }
}

export class PokeApiAdapter implements HttpAdapter {

  private readonly axios = axios

  async get<T>(url: string) {
    const { data } = await this.axios.get<T>(url);
    return data;
  }

  async post(url: string, data: any) {
    return axios.post(url, data);
  }

  async put(url: string, data: any) {
    return axios.put(url, data);
  }

  async delete(url: string) {
    return axios.delete(url);
  }
}