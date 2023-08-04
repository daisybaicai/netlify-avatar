import axios from "axios";
exports.handler = async function (event, context, callback) {
  let url = event.queryStringParameters.name.trim();

    return axios.get(url).then(response => {
        return {
        statusCode: 200,
        body: JSON.stringify(response.data)
        }
    }).catch(error => {
        console.log(error)
        return {
        statusCode: 422
        body: `Error: ${error}`,
        }
    })
};
