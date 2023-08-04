const axios = required("axios");
exports.handler = async function (event, context, callback) {
  let url = event.queryStringParameters.name.trim();

    if(!url) {
        callback(null, {
            statusCode: 200,
            body: {
                code: 500
                message: 'Please provide a url'
            }
        })
    }

  // return axios.get(url).then(response => {
  //     return {
  //     statusCode: 200,
  //     body: JSON.stringify(response.data)
  //     }
  // }).catch(error => {
  //     console.log(error)
  //     return {
  //     statusCode: 422
  //     body: `Error: ${error}`,
  //     }
  // })
//   try {
//     const fields = await parseMultipartForm(event);

//     if (!fields) {
//       throw new Error("Unable to parse image");
//     }

//     console.log("fields is: ", fields);
//     console.log("image is: ", fields.image);

//     const image = fields.image[0];

//     // Handle image however you want here...

//     return {
//       statusCode: 200,
//       body: JSON.stringify(image),
//     };
//   } catch (error) {
//     return {
//       statusCode: 400,
//       body: error.toString(),
//     };
//   }
};
