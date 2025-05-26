/**
 * @swagger
 * tags:
 *   - name: option
 *     description: option module and routes
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     CreateOption:
 *       type: object
 *       required:
 *         - title    
 *         - key    
 *         - type    
 *         - category    
 *       properties:
 *         title:
 *           type: string
 *         key:
 *           type: string
 *         guid:
 *           type: string
 *         category:
 *           type: string
 *         type:
 *           type: string
 *           enum: 
 *             - number
 *             - string
 *             - array
 *             - boolean
 *         enum:
 *           type: array
 *           items:
 *             type: string
 */

/**
 * @swagger
 * /option:
 *   post:
 *     summary: Create new option for category
 *     tags:
 *       - option
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateOption'
 *         application/x-www-form-urlencoded:
 *           schema:
 *             $ref: '#/components/schemas/CreateOption'
 *     responses:
 *       201:
 *         description: Created
 */

/**
 * @swagger
 * /option/{categoryId}:
 *   get:
 *     summary: Get all options of a category
 *     tags:
 *       - option
 *     parameters:
 *       - in: path
 *         name: categoryId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully fetched
 */
