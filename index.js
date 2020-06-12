const fetch = require('node-fetch');

/**
 * finalURL = '{}/makeLog'.format(self.url)
        response = requests.post(
            finalURL,
            json={
                "tokenId": self.tokenId,
                "accessToken": self.accessToken,
                "message": log_data.message,
                "payload": payload
            },
            headers={
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        )
 */

// const URL = 'http://localhost:8080/v1'
const URL = 'https://app.codewatchman.com/v1'
class CodeWatchMan {
    constructor(tokenId, accessToken) {
        this.tokenId = tokenId;
        this.accessToken = accessToken;
    }

    sendLog({ message, logCode, payload, logId }) {
        return new Promise((resolve, reject) => {
            fetch(`${URL}/log`, {
                method: 'POST',
                body: JSON.stringify({
                    "logCode": logCode,
                    "tokenId": this.tokenId,
                    "accessToken": this.accessToken,
                    "message": message,
                    "payload": payload,
                    "logId": logId
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then(res => res.json())
            .then(json => {
                console.log(json);
                resolve(json);
            })
            .catch(err => reject(err));
        });
    }
}

module.exports = CodeWatchMan;