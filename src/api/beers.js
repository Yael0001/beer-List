import axios from 'axios';

export const getBeers = (page, perPage) => {
    const params = "page="+page+"&per_page="+perPage;
    return axios.get('beers?'+params)
    .then(res => res.data)
    .catch(err => console.log(err))
}
