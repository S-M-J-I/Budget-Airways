import { IP, PORT } from "../../configs/env.configs"
/**
 * Compose a url path to make calls to APIs
 * @param {String} path 
 * @returns {String} The url of the path we want to compose
 */
const composeApi = (path) => {
    return `http://${IP}:${PORT}/api/${path}`
}

const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export { composeApi, numberWithCommas }