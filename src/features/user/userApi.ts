import axios from "../../axios"
export async function fetchUser  (username: string) {
    const user = await axios.get(username)
    return user
  }