import "core-js/stable";
import "regenerator-runtime/runtime";

function fetchData(callback: (data: string) => void) {
  setTimeout(() => {
    callback("Data fetched");
  }, 1000);
}

fetchData((data) => {
  console.log(data); // Outputs: Data fetched
});

// function fetchData1(): Promise<string> {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Data fetched");
//     }, 1000);
//   });
// }

// fetchData1()
//   .then((data) => {
//     console.log(data); // Outputs: Data fetched
//   })
//   .catch((error) => {
//     console.error(error);
//   });

function fetchData12(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched");
    }, 1000);
  });
}

async function fetchDataAsync() {
  try {
    const data = await fetchData12();
    console.log(data); // Outputs: Data fetched
  } catch (error) {
    console.error(error);
  }
}

fetchDataAsync();
