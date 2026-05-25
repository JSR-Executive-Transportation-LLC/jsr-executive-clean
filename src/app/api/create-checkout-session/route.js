import Stripe from 'stripe';
import { NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const body = await req.json();

    const amount = body.amount;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],

      mode: 'payment',

      customer_creation: 'always',

      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'JSR Executive Reservation',
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],

      payment_intent_data: {
        capture_method: 'manual',
        setup_future_usage: 'off_session',
      },

      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cancel`,
    });

    return NextResponse.json({ url: session.url });

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}