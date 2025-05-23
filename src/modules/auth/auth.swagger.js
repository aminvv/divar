/**
 * @swagger
 * tags:
 *   - name: Auth
 *     description: Auth modules and Routes
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     sendOtp:
 *       type: object
 *       required:
 *         - mobile
 *       properties:
 *         mobile:
 *           type: string
 *     checkOtp:
 *       type: object
 *       required:
 *         - mobile
 *         - code
 *       properties:
 *         mobile:
 *           type: string
 *         code:
 *           type: string
*/

/**
 * @swagger
 * /auth/send-otp:
 *   post:
 *     summary: Login with OTP in this endpoint
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             $ref: '#/components/schemas/sendOtp'
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/sendOtp'
 *     responses:
 *       200:
 *         description: success
 */




/** 
 * @swagger
 * /auth/check-otp:
 *   post:
 *     summary: check otp for login
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             $ref: '#/components/schemas/checkOtp'
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/checkOtp'
 *     responses:
 *       200:
 *         description: success
 */



/** 
 * @swagger
 * /auth/logout:
 *   get:
 *     summary:  logout account
 *     tags:
 *       - Auth
 *     responses:
 *       200:
 *         description: success
 */
