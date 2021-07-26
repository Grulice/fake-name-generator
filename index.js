const express = require('express');
const faker = require('faker');

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/generate-name', (req, res) => {
    const response = {
        name: faker.name.findName(),
    };

    res.json(response);
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
