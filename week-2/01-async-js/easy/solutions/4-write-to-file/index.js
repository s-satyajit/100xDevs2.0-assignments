const fs = require('fs')

fs.readFile('a.txt', 'utf-8', (err, data) => {
    if(err) {
        console.log(err)
        return
    }
    console.log(data)
    const newData = "Hello, Satyajit here!"
    if(data != undefined) {
        fs.writeFile('a.txt', newData, 'utf-8', (err, data) => {
            if(err) {
                console.log(err)
                return 
            }
            console.log(`File write done successfully ${newData}`)
        })
    }
})