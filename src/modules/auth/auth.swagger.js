/**
 * @swagger
 * tags:
 *  name: Auth
 *  description: Auth modules and Routes
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
 */
