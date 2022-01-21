// const fill = (array, value, start = 0, end = array.length) => {
//     const arrayLength = array.length;
//     const normalizedStart = start > arrayLength ? end : start;
//     const normalizedEnd = end > arrayLength ? arrayLength : end;
//     for (let i = normalizedStart; i < normalizedEnd; i += 1) {
//       array[i] = value;
//     }
//     return array;
//   };
//   let array = [1, 2, 3, 4];
//   console.log(fill(array, '*', 1, 3));
//   export default fill;

  export default (coll, value, start = 0, end = coll.length) => {
    if (coll.length === 0) return [];
    if (!value) return coll;
    if(end > coll.length) end = coll.length;
    for (let i = start; i < end; i += 1) {
      coll[i] = value;
    }
    return coll;
  };