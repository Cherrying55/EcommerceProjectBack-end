export async function setWishlists(req, res) {
    const wish = res.locals.wish
  
    try {
      await wishcollection.insertOne(wish)
      res.status(201)
    } catch (error) {
      console.error(error)
      res.status(500)
    }
  
  }
  
  export async function getWishlist(req, res) {
    const user = res.locals.wish.user
  
    try {
      const wishlist = await wishlistCollection.find({ user }).toArray()
  
  
      res.send({ wishlist, user })
    } catch (error) {
      console.error(error)
      res.status(500)
    }
  
  }