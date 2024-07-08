import { NextResponse } from "next/server";
import { Stripe } from "stripe";

export async function POST(request) {
  const { priceId } = await request.json();

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    payment_method_types: ["card"],
    line_items: [ //Aquí especificamos el precio y la cantidad de productos que se van a comprar, aquí colocariamos todos los productos que queremos cobrar
      { //Cada objeto representa un producto
        price: priceId, //Aquí colocamos el id del precio que queremos cobrar
        quantity: 1, //Aquí colocamos la cantidad de productos que se van a comprar
      },
    ],
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000",
  });

  return NextResponse.json({
    url: session.url,
  });
}
