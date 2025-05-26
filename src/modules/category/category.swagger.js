/**
 * @swagger
 * tags:
 *   - name: Category
 *     description: category module
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     createCategory:
 *       type: object
 *       required:
 *         - name
 *         - icon
 *       properties:
 *         name:
 *           type: string
 *         slug:
 *           type: string
 *         icon:
 *           type: string
 *         parent:
 *           type: string
 */

/**
 * @swagger
 * /category:
 *   post:
 *     summary: create new category
 *     tags:
 *       - Category
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             $ref: '#/components/schemas/createCategory'
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createCategory'
 *     responses:
 *       201:
 *         description: created
 */

/**
 * @swagger
 * /category:
 *   get:
 *     summary: get all category
 *     tags:
 *       - Category
 *     responses:
 *       200:
 *         description: successfully
 */
