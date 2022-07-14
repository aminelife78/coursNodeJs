const http = require("http")

const server = http.createServer((req,res)=>{
  res.write("helo word\n")
  res.write("helo amine")


  res.end()
})

server.listen(3000)