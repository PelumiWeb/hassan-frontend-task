import axios from "../../axios"
export async function fetchRepo  (username: string) {
    const repo = await axios.get(`${username}/repos`)
    return repo
  }