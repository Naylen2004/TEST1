/**
 * File name:    index.js **  routes
 * Student name: Krishna Ramlakhan
 * Student ID:   818583171 
 * Date:         March 1st, 2023 
 * App Name: Book List
 */
import { Router } from 'express';

let router = Router();

import {DisplayHomePage} from '../controllers/index.js';

/* Display home page. */
router.get('/', DisplayHomePage);

/* Display home page. */
router.get('/home', DisplayHomePage);

export default router;