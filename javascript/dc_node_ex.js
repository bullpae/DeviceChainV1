var ScaleChain = require('scalechain-nodejs');

var dc_node = ScaleChain.NodeController;

dc_node.list('mainnet', function(err, res, req) {
  console.log(res);
  return res;
});

module.exports = dc_node;