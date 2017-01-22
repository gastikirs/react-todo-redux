var moment = require('moment');

var now = moment();

console.log('Current timestamp ', now.unix());

var timestamp = 1484860634;

var current = moment.unix(timestamp);

console.log('cambiado, ' + current.format('MMM D, YYYY @ HH:mm'));