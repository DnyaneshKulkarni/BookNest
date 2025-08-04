import express from 'express';
import { signup,login } from '../controller/user.controller.js';


const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);

export default router;

/*
POST Request
Purpose: Submit data to a server (e.g., form submissions, file uploads).

Data Transmission: Data is sent in the request body.

Not visible in the URL.

Visibility: More secure (not visible in browser history or URL).

Caching: Not cached by default.

Bookmarkable: Cannot be bookmarked with form data.

Idempotent: Not idempotent; repeating a POST can cause side effects (like duplicate submissions).
 */