//TODO update endpoints to non-local versions
import axios from 'axios';

const getRoots = async (coefficients) => {
  let results = {};
  try {
    results = await axios.post('http://localhost:8080/roots', {coefficients: coefficients});
    return results.data;
  } catch (err) {
    console.log(err);
    return results;
  }
};

export { getRoots };
