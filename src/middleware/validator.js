  

'use strict';

function reqName(name) {
  return (req, res, next) => {
    if (typeof name == 'string') {
      req.string = name.toLocaleUpperCase();
      next();
    } else {
      next(`this is not a String ${name}`);
    }

  };
}

module.exports = reqName;