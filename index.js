import axios from 'axios';

export async function obtainUserData(user) {
    const url = `https://api.github.com/users/${user}`;
    try {
        const data = await axios.get(url);
        return data.data;
    } catch (error) {
        return console.error(error);
    }
}