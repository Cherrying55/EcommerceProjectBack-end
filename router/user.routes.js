


const userrouter = Router();

userrouter.post("/sign-in", getUser);
userrouter.post("/sign-up", signupvalidation, setUsers);

export default userrouter;