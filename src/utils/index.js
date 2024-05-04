import axios from "axios";

const productionUrl = "https://strapi-store-server.onrender.com/api";

export const customFetch = axios.create({
    baseURL : productionUrl,
})

export const formatPrice = (price) => {
    const dollarAmount = new Intl.NumberFormat("en-US", {
        currency: "USD",
        style: "currency",
    }).format((price / 100).toFixed());
    return dollarAmount;
}

