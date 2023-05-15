import http from "../http-common";
const getAll = () => {
  return http.get("/products");
};
const get = id => {
  return http.get(`/products/${id}`);
};
const create = data => {
  return http.post("/products", data);
};
const update = (id, data) => {
  return http.put(`/products/${id}`, data);
};
const remove = id => {
  return http.delete(`/products/${id}`);
};
/* any other service or queries or sorting or features which you want to add
const removeAll = () => {
  return http.delete(`/tutorials`);
};
const findByTitle = title => {
  return http.get(`/tutorials?title=${title}`);
};*/
const ProductService = {
  getAll,
  get,
  create,
  update,
  remove,
  //removeAll,
  //findByTitle
  //you can add more actions here
};
export default ProductService;