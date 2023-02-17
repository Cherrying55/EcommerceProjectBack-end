export async function setCarts(req, res) {
    const cart = res.locals.cart
  
    try {
      await cartcollection.insertOne(cart)
      res.status(201)
    } catch (error) {
      console.error(error)
      res.status(500)
    }
  
  }
  
  export async function getCart(req, res) {
    const user = res.locals.cart.user
  
    try {
      const cartlist = await cartlistCollection.find({ user }).toArray()
  
  
      res.send({ cartlist, user })
    } catch (error) {
      console.error(error)
      res.status(500)
    }
  
  }