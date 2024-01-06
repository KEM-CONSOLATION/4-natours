const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE_LOCAL;
// .replace(
//   '<PASSWORD>',
//   process.env.DATABASE_PASSWORD,
// );
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    // console.log(con.connections);
    console.log('DB successfull');
  });

// console.log(tourSchema);
const port = process.env.port || 8000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
