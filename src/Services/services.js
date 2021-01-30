import axios from "axios";

const drugs = "http://localhost:3001/drugs";
const distribution = "http://localhost:3001/distributions";
const users = "http://localhost:3001/users";
const DATABASE_URL = "mysql://root:@localhost:3306/dtracer_db?schema=public";

//********************************** DRUGS ******************************//
const getDrugs = () => {
  axios.get(drugs).then((res) => {
    const drug = res.data;
    console.log(drug);
  });
};

//********************************** DISTRIBUTION ******************************//
const getDist = () => {
  axios.get(distribution).then((res) => {
    const dist = res.data;
    console.log(dist);
  });
};

const createDist = (newObject) => {
  const request = axios.post(distribution, newObject);
  return request.then((response) => response.data);
};

const updateDist = (id, newObject) => {
  const request = axios.put(`${distribution}/${id}`, newObject);
  return request.then((response) => response.data);
};

//********************************** USERS ******************************//
const getUsers = () => {
  axios.get(users).then((res) => {
    const user = res.data;
    console.log(user);
  });
};

export default { getDist, createDist, updateDist };
