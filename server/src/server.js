import { createServer } from 'http';
import { connection, connect } from 'mongoose';

// const MONGO_URL = 'mongodb+srv://retink-task:retink@cluster0.dklxm8g.mongodb.net/retink-task?retryWrites=true&w=majority'


import app from './app';

const PORT = process.env.PORT || 8000;

const server = createServer(app);

connection.once('open', () => {
    console.log('Connection ready');
});

connection.on('error', (err) => {
    console.error(err);
})

async function startServer() {
    await connect(MONGO_URL);
    
    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });    
}

startServer();