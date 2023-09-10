import express from 'express';
import dotenv from 'dotenv';
import { connection } from './database/db.js';
import DefaultData from './default.js';
import router from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import stripe from 'stripe';

const stripeInstance = stripe('sk_test_51NmJMjSHkZOP0UbjMPA6pFzZL8BdD8XhdDqCQ2XQUlph10IWjLbNMv0rMJtoHrT0Ces1vH4lGnkQYN2pc1oHPY5G0063k240R5');

const app =express();


app.use(bodyParser.json({extended:true}));
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',router);

//payment api
app.post('/create-checkout-session', async (req, res) => {
    const {products} = req.body;
    console.log(products);
    const lineItems = products.map((item) => ({
        price_data:{
            currency: 'inr',
            product_data: {
                name: item.title.longTitle,
            },
            unit_amount: ((item.price.cost+40)*100),
        },  quantity: 1,
    }));
    const session = await stripeInstance.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: lineItems, 
        mode: 'payment',
        shipping_address_collection: {
            allowed_countries: ['US','IN','CA','GB','FR','DE'],
          },
          custom_text: {
            shipping_address: {
              message: 'Please note that we can\'t guarantee 2-day delivery for PO boxes at this time.',
            },
            submit: {
              message: 'We\'ll email you instructions on how to get started.',
            },
          },
        success_url: 'http://localhost:3000/success',
        cancel_url: 'http://localhost:3000/cancel',
    });
    res.json({ id: session.id });
});

dotenv.config();

const userName= process.env.DB_USERNAME;
const password= process.env.DB_PASSWORD;
connection(userName,password);
const PORT = 8000;
app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
})

DefaultData();