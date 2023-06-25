import api from "./client";

const postQuestionByCohere = (model: string, question: string) => {
    return api.apiClient.post(`/ask/cohere/${model}/${question}`);
}

const getRecommendationCassias = () => {
    return api.apiClient.post(`/recsys`);
}

export default {
    postQuestionByCohere,
    getRecommendationCassias
}