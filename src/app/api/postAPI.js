import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
	baseURL: "http://localhost:8080",
	prepareHeaders: (headers, { getState }) => {
		const token = getState().auth.token;
		if (token) {
			headers.set("token", `${token}`);
		}
		return headers;
	},
});

const postAPI = createApi({
	baseQuery: baseQuery,
	endpoints: (builder) => ({
		getAllPosts: builder.query({
			query: () => `/`,
		}),
		createPost: builder.mutation({
			query: ({ message }) => ({
				url: `/`,
				method: "POST",
				body: {
					message: message,
				},
			}),
		}),
		editPost: builder.mutation({
			query: ({ id, message }) => ({
				url: `/${id}`,
				method: "PATCH",
				body: {
					message: message,
				},
			}),
		}),
		deletePost: builder.mutation({
			query: ({ id }) => ({
				url: `/${id}`,
				method: "DELETE",
			}),
		}),
	}),
});

export const {
	useGetAllPostsQuery,
	useCreatePostMutation,
	useEditPostMutation,
	useDeletePostMutation,
} = postAPI;

export default postAPI;
