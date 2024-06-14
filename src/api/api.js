import axios from "axios";

export const api_key = 'a49743380aaa5b94886a30746fe7c08e';

export const api = axios.create({
    baseURL : 'https://api.themoviedb.org/3'
})