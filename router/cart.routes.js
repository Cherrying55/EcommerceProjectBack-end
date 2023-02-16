const cartrouter = Router();


cartrouter.use(authRoutesValidation);
cartrouter.post("/cart", cartValidation, setCarts);
cartrouter.get("/cart", getCart);

export default cartrouter;