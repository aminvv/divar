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
 *         required:
 *           type: boolean
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
 * 
 * 
 *     UpdateOption:
 *       type: object  
 *       properties:
 *         title:
 *           type: string
 *         key:
 *           type: string
 *         guid:
 *           type: string
 *         category:
 *           type: string
 *         required:
 *           type: boolean
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
 *         application/x-www-form-urlencoded:
 *           schema:
 *             $ref: '#/components/schemas/CreateOption'
 *         application/ json:
 *           schema:
 *             $ref: '#/components/schemas/CreateOption'
 *     responses:
 *       201:
 *         description: Created
 */


/** 
 * @swagger
 * /option/{id}:
 *   put:
 *     summary: update new option for category
 *     tags:
 *       - option
 *     parameters:
 *       - in: path
 *         name: id
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             $ref: '#/components/schemas/UpdateOption'
 *         application/ json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateOption'
 *     responses:
 *       201:
 *         description: Created
 */

/**
 * @swagger
 * /option:
 *   get:
 *     summary: Get all options of a category
 *     tags:
 *       - option
 *     responses:
 *       200:
 *         description: Successfully fetched
 */
/**
 * @swagger
 * /option/by-category/{CategoryId}:
 *   get:
 *     summary: Get  options by categoryId
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

/**
 * @swagger
 * /option/by-category-slug/{slug}:
 *   get:
 *     summary: Get  options by slug
 *     tags:
 *       - option
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully fetched
 */


/**
 * @swagger
 * /option/{id}:
 *   get:
 *     summary: Get  options of a category
 *     tags:
 *       - option
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully fetched
 */



/**
 * @swagger
 * /option/{id}:
 *   delete:
 *     summary: delete options of a category
 *     tags:
 *       - option
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully fetched
 */
