const paginate = (data) => {
  const itemsOnaPage = 10;
  const noOfPages = Math.ceil(data.length / itemsOnaPage);
  const arrOfArr = Array.from({ length: noOfPages }, (_, i) => {
    const start = i * itemsOnaPage;
    return data.slice(start, start + itemsOnaPage);
  });
  return arrOfArr;
};

export default paginate;
