import express from 'express';
import dotenv from 'dotenv';
import { connection } from './database/db.js';
import router from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import stripe from 'stripe';

dotenv.config();
const stripeInstance = stripe(process.env.STRIPE_SECRET_KEY);

const app =express();


app.use(bodyParser.json({extended:true}));
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',router);


app.post('/create-checkout-session', async (req, res) => {
    const {products} = req.body;
    // console.log(products);
    const lineItems = products.map((item) => ({
        price_data:{
            currency: 'inr',
            product_data: {
                name: item.title.longTitle,
            },
            unit_amount: (Math.round(item.price.cost)*100),
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
        success_url: 'https://nex-change-iota.vercel.app/success',
        cancel_url: 'https://nex-change-iota.vercel.app/cancel',
    });
    res.json({ id: session.id });
});



const userName= process.env.DB_USERNAME;
const password= process.env.DB_PASSWORD;
connection(userName,password);
const PORT = 8000;



app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
})