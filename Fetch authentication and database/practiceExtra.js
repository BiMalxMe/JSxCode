const jwt = require("jsonwebtoken");

const jwtPassword = "123456";

function tokenize(username) {
  var token = jwt.sign({ username: username }, jwtPassword);
  console.log(token);
}
tokenize("priya@gmail.com");
//token =>    eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InByaXlhQG
//           dtYWlsLmNvbSIsImlhdCI6MTcyNjA3NjA5OH0.hSo6SHToGESOMYOllxd0S2z3CvSQzTvFVW_GO2g3LrQ

function untokenize(token){
    var decode=jwt.verify(token,jwtPassword)
    const username=decode.username
    console.log(username)
}
untokenize('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InByaXlhQGdtYWlsLmNvbSIsImlhdCI6MTcyNjA3NjA5OH0.hSo6SHToGESOMYOllxd0S2z3CvSQzTvFVW_GO2g3LrQ')