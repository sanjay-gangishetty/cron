// Cron Syntax
// # ┌────────────── second (optional)
// # │ ┌──────────── minute
// # │ │ ┌────────── hour
// # │ │ │ ┌──────── day of month
// # │ │ │ │ ┌────── month
// # │ │ │ │ │ ┌──── day of week
// # │ │ │ │ │ │
// # │ │ │ │ │ │
// # * * * * * *

// Fetch data every second
const cron = require('node-cron');
const axios = require('axios');

const fetchApiData = async () => {
  try {
    const response = await axios.get('https://api.example.com/data'); 
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching API data:', error);
  }
};


// cron job runs every second, refer the above cron syntax for making changes.
cron.schedule('* * * * * *', fetchApiData);
