import mongoose from "mongoose";

const userSchema = mongoose.Schema(
	{
		firstname: {
			type: String,
			required: true,
		},
		lastname: {
			type: String,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{ timeStamps: true }
);

const User = mongoose.model("user", userSchema);
export default User;
