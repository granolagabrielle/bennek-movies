const express = require('express');
const app = express();
// require('dotenv').config();
const PORT = process.env.PORT || 5001;

// Listen Server & Port
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
