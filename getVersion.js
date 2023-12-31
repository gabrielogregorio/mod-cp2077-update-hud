const fs = require('fs')

const content = fs.readFileSync('./install_log.xml').toString()

return /version="([\d\.]{1,})"/.exec(content)[1]