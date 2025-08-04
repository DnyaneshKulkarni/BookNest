import express from 'express';
import { getBook } from '../controller/book.controller.js';
const router= express.Router();

router.get("/", getBook);

export default router;

/*
GET Request
Purpose: Retrieve data from a server.

Data Transmission: Data is sent in the URL as query parameters.

Example: https://example.com/search?query=chatgpt

Visibility: Parameters are visible in the URL (not secure for sensitive data).

Caching: Can be cached by browsers.

Bookmarkable: Since parameters are in the URL, it can be bookmarked.

Idempotent: Safe to repeat; doesn't change server state.
*/
