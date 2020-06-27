const fs = require("fs")
const ClientHandler = require("./client_handler")

const clientMock = {
  emit: (message, data) => {
    if (message === "done") {
      console.log(data.path)
    }
  },
}

// check for required argument
if (process.argv.length < 3) {
  console.error("Missing required argument")
  console.error("Please provide the file path")
}

// read JSON data from file
const data = fs.readFileSync(process.argv[2], 'utf8')

// execute logic responsible for creating git repository
ClientHandler(clientMock)(data)
