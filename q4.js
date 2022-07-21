const func1 = new Promise((resolve) => resolve(`func1`));
const func2 = new Promise((resolve) => resolve(`func2`));
const func3 = new Promise((resolve) => resolve(`func3`));

const main = () => {
}
    const result1 =  func1
    const result2 =  func2
    const result3 =  func3

   Promise.all([result1, result2, result3]).then((values) => {
  console.log(values);
});