import { Stripe } from "stripe";
import ButtonCheckout from "@/assets/components/pricing/ButtonCheckout";

//Material UI:
import { Box } from "@mui/material";

async function loadPrices() {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const prices = await stripe.prices.list();
  const sortedPrices = prices.data.sort(
    (a, b) => a.unit_amount - b.unit_amount
  );
  return sortedPrices;
}

async function PricingPage() {
  const prices = await loadPrices();
  console.log(prices);

  return (
    <Box sx={{backgroundColor: "green", height: "100vh"}}>
      <div>
        <header>
          <h1 className="text-center my-5">Pricing</h1>
        </header>

        <div className="flex gap-x-2">
          {prices.map((price) => (
            <div key={price.id} className="bg-slate-300 mb-2 p-7">
              <h3>{price.nickname}</h3>
              <h2 className="text-3xl font-bold">{price.unit_amount / 100}$</h2>
              <ButtonCheckout priceId={price.id} />
            </div>
          ))}
        </div>
      </div>
    </Box>
  );
}

export default PricingPage;
