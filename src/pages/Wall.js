import React from "react";
import Navigation from "../components/Navigation";
import PostForm from "../components/PostForm";
import Post from "../components/Post";

import { useGetAllPostsQuery } from "../app/api/postAPI";

const Wall = () => {
	const { data = [], isLoading, isError } = useGetAllPostsQuery();

	return (
		<main className="">
			<Navigation />
			<div className="">
				<PostForm />

				{isError ? (
					<h1>Oh no, there was an error</h1>
				) : isLoading ? (
					<h1>Loading...</h1>
				) : data ? (
					<ul>
						{data.map((post, i) => (
							<li key={i}>
								<Post
									userID={post.user_id}
									message={post.message}
									id={post.id}
								/>
							</li>
						))}
					</ul>
				) : (
					"No Data"
				)}
			</div>
		</main>
	);
};

export default Wall;
