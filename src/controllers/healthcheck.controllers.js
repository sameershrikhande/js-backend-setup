import { ApiResponse } from "../utils/ApiResponse.js"
import { ApiError } from "../utils/ApiError.js"
import { asyncHandler } from "../utils/asyncHandler.js"

import logger from "../logger.js";

const healthcheck = asyncHandler(async (req, res) => {
  logger.info("Health check Successful")
  return res
    .status(200)
    .json(new ApiResponse(200, "OK", "Health check passed"))
})

export {healthcheck}