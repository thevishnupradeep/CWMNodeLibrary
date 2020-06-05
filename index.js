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

// const URL = 'http://localhost:5001/codewatchman/us-central1'
const URL = 'https://us-central1-codewatchman.cloudfunctions.net'
class CodeWatchMan {

    validateAsync(tokenId, accessToken) {
        this.tokenId = tokenId;
        this.accessToken = accessToken;

        return new Promise((resolve, reject) => {
            fetch(`${URL}/validateToken`, {
                method: 'POST',
                body: JSON.stringify({
                    "tokenId": this.tokenId,
                    "accessToken": this.accessToken
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then(res => res.json())
            .then(json => {
                console.log(json);
                this.isValidated = true;
                resolve(json);
            })
            .catch(err => reject(err));
        });
    }

    sendLogAsync({ message, payload, logId }) {
        return new Promise((resolve, reject) => {
            if (!this.isValidated) {
                reject(new Error("Token not validated. Please call CodeWatchMan.validateAsync(tokenId, accessToken) first."))
            }

            fetch(`${URL}/makeLog`, {
                method: 'POST',
                body: JSON.stringify({
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