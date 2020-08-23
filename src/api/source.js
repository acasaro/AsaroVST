import axios from 'axios';

async function getSource() {
    try {
        const response = await axios.get('http://localhost:3001/source/devices');
        return response;
    } catch (error) {
        console.error(error);
    }
}

export default getSource;
