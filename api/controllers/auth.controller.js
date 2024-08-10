import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signupRoute = async (req, res) => {
	if (!req.body.firstname || !req.body.email || !req.body.password) {
		return res.status(400).json({ message: "All fields are required" });
	}

	const hashPassword = bcryptjs.hashSync(req.body.password, 10);

	const user = await User.create({
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		email: req.body.email,
		password: hashPassword,
	});
	await user.save();
	res.status(201).json("user created successfully");
};

export const loginRoute = async (req, res) => {
	const { email, password } = req.body;
	try {
		if (!email || !password) {
			return res.status(400).json("All fields are required");
		}
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(400).json("user not found");
		}
		const validPassword = bcryptjs.compareSync(password, user.password);
		if (!validPassword) {
			return res.status(400).json("incorrect password");
		}
		const { password: pass, ...rest } = user._doc;

		res.status(200).json(rest);
	} catch (error) {
		return res.status(400).json(error);
	}
};
