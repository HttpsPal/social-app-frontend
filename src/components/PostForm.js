import React from "react";
import { useForm } from "react-hook-form";

const PostForm = ({ refetch }) => {
	// const [createPost, result] = useCreatePostMutation();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({ defaultValues: { message: "" } });

	const onSubmit = async (data) => {
		try {
			// createPost({ user_id: 1, message: data.message });
			reset({ message: "" });
			// console.log(result);
			refetch();
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="mb-8">
			<label className="" htmlFor="message">
				Message
			</label>
			<textarea
				{...register("message", {
					required: true,
					maxLength: { value: 700, message: "Max Length is 700 characters" },
				})}
				placeholder="Type in your message..."
				type="text"
				name="message"
				className=""
			></textarea>
			{errors.message && <span>{errors.message.message}</span>}
			<button type="submit">Submit</button>
		</form>
	);
};

export default PostForm;
