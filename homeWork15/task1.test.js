const axios = require('axios');
const jsonData = require('./env.json');
const fs = require('fs')

 async function cetchError() {
    try {
        await axios.get(`${jsonData.baseUrl}/post`, {
            headers: { "Content-Type": "application/json" }
        });
    } catch (error) {
        throw new Error("InvalidEndpoint");
    }
}


test("User can get all posts", async() =>{
    await expect(cetchError()).rejects.toThrow("InvalidEndpoint")
})