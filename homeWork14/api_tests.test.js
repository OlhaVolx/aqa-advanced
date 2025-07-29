const axios = require('axios');
const jsonData = require('./env.json');
const fs = require('fs')

test("User can get all posts", async () => {
    var response = await axios.get(`${jsonData.baseUrl}/posts`,
            {
            headers: {
                "Content-Type": "application/json",
            }
        })
    console.log(response.data);
    expect(response.status).toEqual(200);
    expect(response.data).toBeInstanceOf(Array);
})

test("User can get post by postId", async () => {
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

test("User can create a post", async () => {
    let newPost =  {
            "userId": 11,
            "title": "test title",
            "body": "Test body"
        };
    var response = await axios.post(`${jsonData.baseUrl}/posts`, newPost,
                   {
            headers: {
                "Content-Type": "application/json",
            }
        })
    console.log(response.data);
    expect(response.status).toEqual(201);
    expect(response.data).toMatchObject(newPost)
})

test("User can get all comments", async () => {
    var response = await axios.get(`${jsonData.baseUrl}/comments`,
            {
            headers: {
                "Content-Type": "application/json",
            }
        })
    console.log(response.data);
    expect(response.status).toEqual(200);
    expect(response.data).toBeInstanceOf(Array);
})

test("User can get comments by postId", async () => {
    var response = await axios.get(`${jsonData.baseUrl}/comments?postId=5`,
            {
            headers: {
                "Content-Type": "application/json",
            }
        })
    console.log(response.data);
    expect(response.status).toEqual(200);
    expect(response.data).toBeInstanceOf(Array)
})

test("User can get comment by commentId", async () => {
    var response = await axios.get(`${jsonData.baseUrl}/comments/10`,
            {
            headers: {
                "Content-Type": "application/json",
            }
        })
    console.log(response.data);
    expect(response.status).toEqual(200);
    expect(response.data.id).toBe(10)
})

test("User can create a comment", async () => {
    let newComment =  {"postId": 11,
        "name": "Any Name",
        "email": "testemail@test.com",
        "body": "Test body"}
    var response = await axios.post(`${jsonData.baseUrl}/posts`, newComment,
                   {
            headers: {
                "Content-Type": "application/json",
            }
        })
    console.log(response.data);
    expect(response.status).toEqual(201);
    expect(response.data).toMatchObject(newComment)
})
