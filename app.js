/////   PROMISE PATTERN 3:
const { readFile, writeFile } = require("fs").promises;

const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf-8");
    const second = await readFile("./content/second.txt", "utf-8");
    console.log(first, second);
    await writeFile(
      "./content/result-mind-grenade.txt",
      `THIS IS AWESOME: ${first} ${second}`,
      { flag: "a" }
    );
  } catch (error) {
    console.log(error);
  }
};

start();


/////   PROMISE PATTERN 2:
// const { readFile, writeFile } = require("fs");
// const util = require("util"); //module from node

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// const start = async () => {
//   try {
//     const first = await readFilePromise("./content/first.txt", "utf-8");
//     const second = await readFilePromise("./content/second.txt", "utf-8");
//     console.log(first, second);
//     await writeFilePromise(
//       "./content/result-mind-grenade.txt",
//       `THIS IS AWESOME: ${first} ${second}`,
//       { flag: "a" }
//     );
//   } catch (error) {
//     console.log(error);
//   }
// };

// start();


/////   PROMISE PATTERN 1:
// const { readFile, writeFile } = require("fs");
// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//       //return a callback function
//       readFile(path, "utf-8", (err, data) => {
//         if (err) {
//           reject(err);
//         }
//         // console.log(data)
//         resolve(data);
//       });
//     });
//   };
// getText("./content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
// const start = async () => {
//     try {
//       const first = await getText("./content/first.txt");
//       const second = await getText("./content/second.txt");
//       console.log(first, second)
//     } catch (error) {
//       console.log(error);
//     }
//   };
// start();
