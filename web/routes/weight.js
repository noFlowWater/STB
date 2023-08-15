const express = require("express");

const router = express.Router();

router.post('/data', (req, res) => {
  const sensorValue = req.body.sensor_value;
  req.io.emit('monitoring', { value: sensorValue })

  res.status(200).send({ sensor_value: sensorValue });
});

module.exports = router;
