const axios = require("axios").default;
const qs = require("querystring");
 
const config = {
   headers: {
       "Content-Type": "application/x-www-form-urlencoded",
   },
};
 
let token = "";
 
const getToken = async() => {
   let token;
   const promise = await axios
       .post(
           "https://accounts.spotify.com/api/token",
           qs.stringify({
               grant_type: "client_credentials",
               client_id: " ca75e74794324c01bfd15a72a0aa3aa7",
               client_secret: "165aa03a90b4849c9a93b345624c0ceca",
           }),
           config
       )
   token = promise.data;
   return token.access_token;
}
 
module.exports = getToken;