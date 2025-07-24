
const userRoutes = require('./routes/userRoutes');

app.use('/', userRoutes);

app.listen(8000, () => {
  console.log('Server running at http://localhost:8000');
});
