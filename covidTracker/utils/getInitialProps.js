async function customCombine(ar1, ar2) {
    // uses array 1 for keys and array 2 for values
    // array1 length = array2 length
    const result = {};
    for (let i = 0; i < ar1.length; i += 1) {
      result[ar1[i]] = ar2[i];
    }
    return result;
  }
  
  export default async (inputObject) => { // of pattern key: promise
    const allKeys = Object.keys(inputObject);
    return Promise.all(Object.values(inputObject)).then(
      async (values) => customCombine(allKeys, values),
    );
  };
  