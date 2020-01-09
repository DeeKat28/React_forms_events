import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 78beea92deb49f34b488caffbf16224f85011ed16c6c0767427736d4b491875b'
    }
});