const express = require('express');
const mongoose = require('mongoose');
const Listing = require('./model/hire.js'); // Ensure the path to your model is correct

const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', './views'); // Specify the directory where EJS templates are stored

// Serve static files (e.g., CSS, JavaScript, and images)
app.use(express.static('public'));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/frameflow', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Database connected!"))
.catch(err => console.log(err));

// Define the route to render the index page
app.get('/', async (req, res) => {
    try {
        const listings = await Listing.find(); // Fetch all listings from the database
        res.render('new_hire.ejs', { listings }); // Pass the listings data to the EJS template
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving data');
    }
});

// Optional: Route to manually trigger data insertion (For development use)
app.get('/insert-data', async (req, res) => {
    try {
        await Listing.insertMany(listingsData); // Insert data into the database
        res.send("Data inserted successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error inserting data");
    }
});

app.listen(8000, () => {
    console.log('Server running on port 8000');
});
