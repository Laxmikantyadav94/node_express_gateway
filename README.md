# node_express_gateway
This repo shows some basic features of Node Express gateways. Features Involved are- 
 - proxy
 - key-auth
 - binding multiple serviceEndpoints
 - rate-limit
 - response-transformer
 - rewrite
 - load balancing (round-robin approch)
 - jwt verification
 - oauth2 (refer ./oauth2_express_gateway.docx for more explanation)
 
 [ducument](./oauth2_express_gateway.docx)
 
 # How_To_Run
 
 - Execute npm i , It will install all the required dependencied
 - Execute npm run start , It Will start 3 servers 
   - Two clone Node API server at - http://localhost:9001/ and http://localhost:9002 . For balancing demonstration
   - Another Node API at server - http://localhost:9003/
   - API gateway server at - http://localhost:8080/
