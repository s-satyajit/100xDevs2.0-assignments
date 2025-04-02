import express from 'express'
import jwt from 'jsonwebtoken'
import zod from 'zod'
const jwtPassword = 'secrect'

const usernameSchema = zod.string().email()
const passwordSchema = zod.string().min(6)

const signJwt = (username, password) => {
    const usernameResponse = usernameSchema.safeParse(username)
    const passwordResponse = passwordSchema.safeParse(password)

    if(!usernameResponse.success || !passwordResponse.success)
        return null;

    const signature = jwt.sign({
        username,
    }, jwtPassword)
    return signature;
}

const decodeJwt = (token) => {
    const decoded = jwt.decode(token)
    if(decoded) return true
    return false
}

const verifyJwt = (token) => {
    let ans = true;
    try {
        jwt.verify(token, jwtPassword)
    } catch(e) {
        ans = false;
    }
    return ans;
}

// const ans = signJwt("satyajitsamal.wormail@gmail.com", "secrect")
// console.log(ans)
// console.log(decodeJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNhdHlhaml0c2FtYWwud29ybWFpbEBnbWFpbC5jb20iLCJpYXQiOjE3NDM1OTgzNDh9.zxrYe9K8GeJQT7ep0kJnjHqN66cX6BawAr_YowN27Xdw"))
console.log(verifyJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNhdHlhapHLQ"))