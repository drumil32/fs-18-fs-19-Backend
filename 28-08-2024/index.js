import axios from 'axios';
import express from 'express';

// Creating express object
const app = express();

// Defining port number
const PORT = 3000;

app.use(express.json());

// Function to serve all static files
// inside public directory.
// app.use(express.static('public')); // we 

// app.use('/images', express.static('public'));

// app.get('/', async (req, res) => {
//     // const resp = await axios.get('https://random.imagecdn.app/500/150');
//     // console.log(resp.data);
//     const value = Math.floor(Math.random() * 10);

// })
// const imageUrls = [
//     'https://picsum.photos/200',
//     'https://source.unsplash.com/random',
//     'https://randomfox.ca/images/1'
// ];

app.get('/api/image/random', async (req, res) => {
    try {
        // const randomIndex = Math.floor(Math.random() * imageUrls.length);
        // const imageUrl = imageUrls[randomIndex];
        const response = await axios.get("https://picsum.photos/200", { responseType: 'arraybuffer' });
        res.set('Content-Type', 'image/jpeg'); // Adjust content type based on image format
        res.send(response.data);
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Error fetching random image');
    }
});

app.listen(3002, () => {
    console.log(`Server is running on port`);
})