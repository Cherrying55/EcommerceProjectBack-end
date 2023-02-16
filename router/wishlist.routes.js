

const wishrouter = Router();


wishrouter.use(authRoutesValidation);
wishrouter.post("/wishlist", wishlistValidation, setWishlists);
wishrouter.get("/wishlist", getWishlist);

export default wishrouter;