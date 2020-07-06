import axiosClient from './axiosClient';

class ArticleApi {
    getAll = (params) => {
        const url = '/article/getall';
        return axiosClient.get(url);
    };
}
const articleApi = new ArticleApi();
export default articleApi;