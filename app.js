const http = require("http");
const cron = require('node-cron'); 
// second minute hour day-of-month month day-of-week 
cron.schedule('*/20 23,0-14 * * *', function(){ 
  console.log('node-cron');
  http.get("http://series-survival.herokuapp.com");
});