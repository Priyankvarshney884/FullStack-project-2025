
const fs = require("fs");

fs.readFile("f1.txt", "utf-8",(err, data) => {
    if(err) {
        console.error("Error reading file:", err);
    }
    console.log("File content:", data);
})

const content = "Hello, this is a new file content!";
fs.writeFile("f2.txt", content, (err) => {});

// rename a file -> create copy of file 
fs.rename("f2.txt", "f2_renamed.txt", (err) => {
});

// delete a file 
fs.unlink("f2.txt",()=>{});

// file stats
fs.stat("f2_renamed.txt", (err, stats) => {
   console.log("size of file:", stats.size);
   
});
