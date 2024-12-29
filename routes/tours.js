import express from 'express';
import { 
    createTour, 
    deleteTour, 
    getAllTour, 
    getFeaturedTour, 
    getSingleTour, 
    getTourBySearch, 
    getTourCount, 
    updateTour 
} from '../controllers/tourController.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

// Get all tours
router.get('/', getAllTour);

// Get single tour by ID
router.get('/:id', getSingleTour);

// Get tours by search criteria
router.get('/search/getTourBySearch', getTourBySearch);

// Get featured tours
router.get('/search/getFeaturedTours', getFeaturedTour);

// Get tour count
router.get('/search/getTourCount', getTourCount);

// Create new tour (admin only)
router.post('/', verifyAdmin, createTour);

// Update tour by ID (admin only)
router.put('/:id', verifyAdmin, updateTour);

// Delete tour by ID (admin only)
router.delete('/:id', verifyAdmin, deleteTour);

export default router;