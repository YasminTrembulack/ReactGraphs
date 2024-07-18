import axios from "axios"

const githubApi = axios.create({
    baseURL: "https://api.github.com/",
    timeout: 8000
})

export default githubApi