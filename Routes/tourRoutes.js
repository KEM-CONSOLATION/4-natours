const express = require('express');

const tourController = require('../controllers/tourController');

const router = express.Router();

// app.use('/api/v1/tours', router);

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour);
router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
