import axios from "axios";
exports.handler = async function (event, context, callback) {
  let url = event.queryStringParameters.name.trim();
  if (!url) {
    return {
      statusCode: 200,
      body: {
        code: 500,
        message: 'url is required'
      },
    };
  }

//   const result  = await axios.get(url).then(res => res.data);

//   return {
//     statusCode: 200,
//     body: identicon(name),
//   };
  axios.get(url).then(res => {
    const result = res.data;
    callback(null, {
        statusCode: 200,
        body: result,
    })
  }).catch(err => {
    callback({
        statusCode: 500,
        body: String(err),
    })
  })
};
