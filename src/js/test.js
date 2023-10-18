const si = require('systeminformation');

si.cpu()
  .then(data => console.log(data.manufacturer))
  .catch(error => console.error(error));