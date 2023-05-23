const express = require("express");
const router = express.Router();
const whatsAppController = require("../controllers/whatsappcontrollers");

router
.get("/", whatsAppController.VerifyToken)
.post("/", whatsAppController.ReceivedMess)

module.exports = router;