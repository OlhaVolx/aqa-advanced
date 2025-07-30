const axios = require('axios');
const jsonData = require('./env.json');
const fs = require('fs')

jest.mock('axios');



const mockedGetAPost = {
    data: {id:5},
    status: 200
}
test("User can get post by postId", async () => {
    await axios.get.mockResolvedValueOnce(mockedGetAPost);
    var response = await axios.get(`${jsonData.baseUrl}/posts/5`,
            {
            headers: {
                "Content-Type": "application/json",
            }
        })
    console.log(response.data);
    expect(response.status).toEqual(200);
    expect(response.data.id).toBe(5)
})


const mockedCreateAPost = {
    data: {},
    status: 200
}
test("User can create a post", async () => {
    let newPost =  {
            "userId": 11,
            "title": "test title",
            "body": "Test body"
        };
    await axios.post.mockResolvedValueOnce(mockedCreateAPost);
    var response = await axios.post(`${jsonData.baseUrl}/posts`, newPost, {
            headers: {"Content-Type": "application/json"}
        })
    console.log(response.data);
    expect(response.status).toEqual(200);

})


const errorGet = {
        response: {
            status: 404,
        }
};
test("User reseives a 404 when get comments by postId", async () => {
    await axios.get.mockRejectedValueOnce(errorGet);

    await expect(
        axios.get(`${jsonData.baseUrl}/comments?postId=5`,{
            headers: {"Content-Type": "application/json"}
        })
    ).rejects.toHaveProperty('response.status', 404)
})


const errorPost = {
        response: {
            status: 400,
        }
}
test("User reseives a 404 when create a comment", async () => {

    await axios.post.mockRejectedValueOnce(errorPost);

    let newComment =  {"postId": "test",
        "name": "Any Name",}

    await expect(
        axios.post(`${jsonData.baseUrl}/posts`, newComment,{
            headers: {"Content-Type": "application/json"}
        })
    ).rejects.toHaveProperty('response.status', 400)
})
