import React from "react";
import { FaTrashAlt } from "react-icons/fa";
// import { useDeletePostMutation } from "../app/api/socialAPI";

const Post = ({ userID, message, id, refetch }) => {
	// const [deletePost, { isLoading }] = useDeletePostMutation();

	// const updatePosts = (id) => {
	// 	deletePost(id);
	// 	refetch();
	// };

	// if (isLoading) return <h1>Loading...</h1>;

	return (
		<div className="rounded border-solid border-2 border-slate-700 py-1.5 pl-4 mb-5 mx-20 w-96">
			<div className="">
				<h2 className="capitalize text-xl mr-2">the goat</h2>
				{/* <h3 className="">User Number: {userID}</h3> */}
			</div>
			<div className="">
				<p className="">{message}</p>
			</div>
			<div>
				<button onClick={() => {}}>
					<FaTrashAlt />
				</button>
			</div>
		</div>
	);
};

export default Post;
