// export default (arr, def = arr.length) => def;

export default (coll, value, start = 0, end = 10) => {
    if (coll.length === 0) return [];
    console.log(coll.length);
    if (!value) return coll;
    if(end > coll.length) end = coll.length;
    for (let i = start; i < end; i += 1) {
      coll[i] = value;
    }
    return coll;
  };