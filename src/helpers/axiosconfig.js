import axios from 'axios';

const baseURL="https://mmmstorehuh.herokuapp.com";

const AxiosConfig=axios.create({
	baseURL:baseURL
});

export default AxiosConfig;