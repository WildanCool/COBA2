// Definisikan dahulu promise yang ingin digunakan
let tesAsyncAwait = async () => {
  if (true) {
    return "Condition is fulfilled!";
  } else {
    throw "Condition is rejected!";
  }
};


// Membuat fungsi run menjadi asynchronous menggunakan async/await
const run = async (condition) => {
  try {
    const message = await tesAsyncAwait(condition);
    console.log(message);  // Output: Condition is fulfilled!
    console.log("After condition is fulfilled"); // Output: After condition is fulfilled
  } catch (error) {
    console.log(error);
  }
};

run(true);