const paginate = (data) => {
  const itemsPerPage = 9;
  const noOfPages = Math.ceil(data.length / itemsPerPage);
  const pages = Array.from({ length: noOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return data.slice(start, start + itemsPerPage);
  });
  return pages;
};

export default paginate;
