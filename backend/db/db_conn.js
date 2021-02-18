const mongoose = require('mongoose');
const conn_str = "mongodb://localhost:27017/learningInProgress";


// DB connection.
mongoose.connect(conn_str, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected Successfully..."))
    .catch((error) => console.log(error));

