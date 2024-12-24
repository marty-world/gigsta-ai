require('dotenv').config();
const express = require('express');
const compression = require('compression');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connect = require('./configs/db');
const PORT = 8080;

// Other Route files
const { userRoute, conversationRoute, gigRoute, messageRoute, orderRoute, reviewRoute, authRoute } = require('./routes');

// App
const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(compression());
app.use(cors({
    origin: [
        'http://localhost:5173',
        'https://localhost:5173',
        'http://localhost:4173',
        'https://localhost:4173',
        'https://gigsta.ai',
        'https://gigstafrontend.netlify.app'
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Cookie'],
    exposedHeaders: ['Set-Cookie']
}));

// Add these before your routes
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Other Routes
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/gigs', gigRoute);
app.use('/api/conversations', conversationRoute);
app.use('/api/orders', orderRoute);
app.use('/api/messages', messageRoute);
app.use('/api/reviews', reviewRoute);

// Routes
app.get('/', (request, response) => {
    response.send('Hello, Topper!');
});

app.get('/ip', (request, response) => {
    const list = request.headers['x-forwarded-for'] || request.socket.remoteAddress;
    const ips = list.split(',');

    return response.send({ ip: ips[0] });
})

app.listen(PORT, async () => {
    try {
        await connect();
        console.log(`Listening at http://localhost:${PORT}`);
    }
    catch ({ message }) {
        console.log(message);
    }
})