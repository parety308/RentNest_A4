import Stripe from "stripe";
import { config } from "./index.js";



const stripe: Stripe = new Stripe(config.stripe_secret_key);


export default stripe;