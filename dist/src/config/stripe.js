import Stripe from "stripe";
import { config } from ".";
const stripe = new Stripe(config.stripe_secret_key);
export default stripe;
//# sourceMappingURL=stripe.js.map