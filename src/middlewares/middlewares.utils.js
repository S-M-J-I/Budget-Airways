/**
 * Compose a url path to make calls to APIs
 * @param {String} path 
 * @returns {String} The url of the path we want to compose
 */
const composeApi = (path) => {
    return `http://192.168.0.246:3000/api/${path}`
}


export { composeApi }