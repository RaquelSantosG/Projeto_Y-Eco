import axios from 'axios';

export const api = axios.create({baseURL: 'https://y-eco.herokuapp.com/'})

export const busca = async(url: any, setDado: any, header: any) => {const resposta = await api.get(url, header)
    setDado(resposta.data)}

    export const buscaId = async(url: any,setDado: any, header: any) => { 
      const resposta = await api.get(url,header)
      setDado(resposta.data)
  }