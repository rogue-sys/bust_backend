// controllers/busScheduleController.js

// Import the BusSchedule model
const BusSchedule = require('../models/busSchedule');

// Controller function to fetch available buses for a specific route
exports.getAvailableBuses = async (req, res) => {
  // Extract source and destination from the request body
  const { source, destination } = req.body;

  try {
    // Find all bus schedules that contain the provided source and destination in their routes
    const availableBuses = await BusSchedule.find({
      $or: [
        { 'route': source },
        { 'route': destination }
      ]
    });

    // Send the list of available buses as the response
    res.json(availableBuses);
  } catch (error) {
    // If an error occurs, send an error response
    res.status(500).json({ message: error.message });
  }
};


// Controller function to receive source and destination data from Flutter app
exports.searchBuses = async (req, res) => {
  // Extract source and destination from the request body
  const { source, destination } = req.body;

  try {
    // Log the received source and destination values
    // console.log('Received source:', source);
    // console.log('Received destination:', destination);
    // Query the database for bus schedules matching the source or destination
    console.log(`Searching for buses from ${source} to ${destination}`);
    const foundBuses = await BusSchedule.find({
      'route': { $in: [source, destination] }
      
    },'vehicleNumber schedule.stations'); 

    // Send the list of found buses as the response
    res.json({ buses: foundBuses });
    console.log('Response sent successfully:', { buses: foundBuses });
    // // Send a success response
    // res.status(200).json({ message: 'Received source and destination data successfully.' });
  } catch (error) {
    // If an error occurs, send an error response
    res.status(500).json({ message: error.message });
  }
};