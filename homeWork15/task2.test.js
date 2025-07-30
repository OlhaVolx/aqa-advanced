const axios = require('axios');
const jsonData = require('./env.json');
const fs = require('fs')

 async function getPostById(id, headers) {
          let response = await axios.get(`${jsonData.baseUrl}/posts/${id}`, { 
            headers: headers,
        });
        return response;
}


test("User can get post by id", async() =>{
    const id =  10;
    const headers = {'Content-Type' : 'application/json'};

    const response = await getPostById(id, headers);

    expect(response.data.id).toBe(10);
    expect(response.headers['content-type']).toContain('application/json');

})