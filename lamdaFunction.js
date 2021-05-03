const https = require('https');

const ibmUrl = "https://api.us-south.natural-language-understanding.watson.cloud.ibm.com/instances/237002e5-32fa-4db5-a6ad-2f9d422348b7"
exports.handler = async (event) => {
    let dataString = '';
    
    var auth = 'Basic ' + Buffer.from("apikey" + ':' + "JjC_ZY-65C_pA3FHDwewNQVLfYwHX1RHpca-jZB9xIX0").toString('base64');
    let header = {'Authorization': auth};
    
    const response = await new Promise((resolve, reject) => {
        const req = https.get(ibmUrl, function(res) {
          res.on('data', chunk => {
            dataString += chunk;
          });
          res.on('end', () => {
            resolve({
                statusCode: 200,
                body: JSON.stringify(JSON.parse(dataString), null, 4)
            });
          });
        }, header);
        
        req.on('error', (e) => {
          reject({
              statusCode: 500,
              body: 'Something went wrong!'
          });
        });
    });
  

    return response;
};