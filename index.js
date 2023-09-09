const express = require("express");
const app = express();

// Define a port for your server
const port = process.env.PORT || 3000;

// Middleware to parse query parameters
app.use(express.urlencoded({ extended: true }));

// Define your endpoint
app.get("/api", (req, res) => {
  // Extract query parameters
  const { slack_name, track } = req.query;

  // Get the current day of the week
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
    const currentDay = daysOfWeek[new Date().getDay()];
    
    // Get the current UTC time
  const now = new Date();
  const utcTime = new Date(
    now.getTime() + now.getTimezoneOffset() * 60000
  ).toISOString();

  // JSON response
  const jsonResponse = {
    slack_name,
    current_day: currentDay,
    utc_time: utcTime,
    track,
    github_file_url: "",
    github_repo_url: "https://github.com/geoffreykithuku/zuri-internship-1",
    status_code: 200,
  };

  // Send the JSON response
  res.status(200).res.json(jsonResponse);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
