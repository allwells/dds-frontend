import axios from "axios";

const drugs = "http://localhost:3001/drugs";
const distribution = "http://localhost:3001/distributions";
const users = "http://localhost:3001/users";

const getDrugs = () => {
  axios.get(drugs).then((res) => {
    const drug = res.data;
    console.log(drug);
  });
};

const getDsitributions = () => {
  axios.get(distribution).then((res) => {
    const dist = res.data;
    console.log(dist);
  });
};

const getUsers = () => {
  axios.get(users).then((res) => {
    const user = res.data;
    console.log(user);
  });
};
