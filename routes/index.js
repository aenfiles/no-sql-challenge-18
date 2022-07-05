
const router = require('express').Router();
const apiRoutes = require('./api');

// Connecting the API routes for the app to use
router.use('/api', apiRoutes);

// Error message "not a valid route"
router.use((req, res) => {
    res.status(404).json('Not a valid route')
});

module.exports = router;