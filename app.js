
let express = require('express');
let logger = require('morgan');
let path = require('path');
let cors = require('cors');
let helmet = require('helmet');
let rootroute = require('./routes/index');

let app = express();
let port = process.env.PORT || 5000;

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(rootroute);

app.listen(port, () => {
  console.log(`Listening to port ${port}`)
});
