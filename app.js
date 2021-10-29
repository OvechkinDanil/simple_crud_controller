const express = require('express');
const bodyParser = require('body-parser');

const controller = require('./controllers/crud_controllers/simple_crud_controllers');
const app  = express();

app.use("/create", controller.create);
app.use("/read", controller.read);
app.use("/update", controller.update);
app.use("/delete", controller.delete);

app.listen(5532, () => {
   console.log("Server started");
});
