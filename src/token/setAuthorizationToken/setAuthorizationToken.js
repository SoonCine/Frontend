import axios from "axios";

const setAuthorizationToken = (token) => {
token ? axios.defaults.headers.common['authorization'] = token : delete axios.defaults.headers.common['authorization']
}



export default setAuthorizationToken