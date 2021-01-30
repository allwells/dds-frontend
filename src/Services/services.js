import axios from "axios";

const drugs = "http://localhost:3001/api/drug";
const distribution = "http://localhost:3001/api/distribution";
const users = "http://localhost:3001/api/user";

//********************************** DRUGS ******************************//
const getDrug = () => {
  const req = axios.get(drugs);
  return req.then((res) => res.data);
};

const createDrug = (newObject) => {
  const request = axios.post(drugs, newObject);
  return request.then((response) => response.data);
};

//********************************** DISTRIBUTION ******************************//
const getDist = () => {
  const req = axios.get(distribution);
  return req.then((res) => res.data);
};

const createDist = (newObject) => {
  const req = axios.post(distribution, newObject);
  return req.then((res) => res.data);
};

//********************************** USERS ******************************//
const getUser = () => {
  const req = axios.get(users);
  return req.then((res) => res.data);
};

const createUser = (newObject) => {
  const req = axios.post(users, newObject);
  return req.then((res) => res.data);
};

export default {
  getDrug,
  getDist,
  getUser,
  createDrug,
  createDist,
  createUser,
};
