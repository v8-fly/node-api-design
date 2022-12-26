import { Router } from "express"
const router = Router()
import { body, oneOf, validationResult } from "express-validator"
import { handleInputErrors } from "./modules/middleware"

/**
 * Product
 */

// Get all the products
router.get("/product", (req, res) => {
  console.log("API CALLED", req.user)

  res.json({
    message: `HI HARDIK😄 PRINT FLAG HEY CHECK  >>> ${req.HEY_JUST_FOR_FUN}`,
  })
})

// Get product with a given id
router.get("/product/:id", (req, res) => {})

// Update a product

// body('name')  > menaing req.body should have a field on it called name
router.put(
  "/product/:id",
  body("name").isString(),
  handleInputErrors,
  (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      res.status(400)
      res.json({ errors: errors.array() })
    }
  }
)

// Create a product
router.post(
  "/product",
  body("name").isString(),
  handleInputErrors,
  (req, res) => {}
)

// Delete a product
router.delete("/product/:id", (req, res) => {})

/**
 * Update
 */

router.get("/update", (req, res) => {})

router.get("/update/:id", (req, res) => {})

router.post(
  "/update",
  body("title").exists().isString(),
  body("body").exists().isString(),
  (req, res) => {}
)

router.put(
  "/update/:id",
  body("title").optional(),
  body("body ").optional(),
  body("status").isIn(["IN_PROGRESS", "LIVE", "DEPRECATED", "ARCHIVED"]),
  body("version").optional(),
  (req, res) => {}
)

router.delete("/update/:id", (req, res) => {})

/**
 * UpdatePoint
 */

router.get("/updatepoint", (req, res) => {})

router.get("/updatepoint/:id", (req, res) => {})

router.post(
  "/updatepoint",
  body("name").optional().isString(),
  body("description").optional().isString(),
  body("updateId").exists().isString(),
  (req, res) => {}
)

router.put(
  "/updatepoint/:id",
  body("name").optional().isString(),
  body("description").optional().isString(),
  (req, res) => {}
)

router.delete("/updatepoint/:id", (req, res) => {})

export default router
