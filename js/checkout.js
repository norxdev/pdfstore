const stripe = Stripe("pk_test_51SojIfHR1jh700B4Jaq0Ih26kK1Qv0dF0PknzsUKo3RcJkLSyzFQZo6HRWHwUctENxWEJPDHrDUSlQt75j9TuIRF00E5YQOfgs");

function buyProduct(priceId) {
  stripe.redirectToCheckout({
    lineItems: [{ price: priceId, quantity: 1 }],
    mode: "payment",
    successUrl: window.location.origin + "/success.html",
    cancelUrl: window.location.origin + "/index.html"
  });
}
