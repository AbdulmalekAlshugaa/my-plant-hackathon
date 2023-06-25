import api from "./client";

const postQuestionByCohere = (model: string, question: string) => {
    return api.apiClient.post(`/cohere/${model}/${question}`);
}

export default {
    postQuestionByCohere,
}