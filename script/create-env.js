const fs=require('fs')

fs.writeFileSync('./.env', `REACT_APP_CLIENT_ID=${process.env.REACT_APP_CLIENT_ID}\n`)
fs.writeFileSync('./.env',`REACT_APP_GOOGLE_KEY=${process.env.REACT_APP_GOOGLE_KEY}\n` )