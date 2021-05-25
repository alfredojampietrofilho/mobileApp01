import axios from 'axios';

export default axios.create ({
    baseURL: 'http://api.timezonedb.com/v2.1/list-time-zone?key=KVLS21LCZL8V&format=json'
});

