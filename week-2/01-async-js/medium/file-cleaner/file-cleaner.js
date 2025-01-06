const fs = require("fs")

const filePath = "a.txt";

fs.readFile(filePath, 'utf-8', (err, data) => {
    if(err)
        console.log(`Error reading file: ${err}`)
    else
        console.log(`File read successfully: ${data}`)

    const cleanedData = data.replace(/\s+/g, ' ').trim()

    if(data !== undefined) {
        fs.writeFile(filePath, cleanedData, 'utf-8', (err) => {
            if(err)
                console.log(`Error writing file: ${err}`)
            else
                console.log(`File write done successfully: ${cleanedData}`)
        })
    } else {
        console.log(`Data is undefined`)
    }
})