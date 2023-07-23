import { validationSchemaBuilder as builder } from '$lib/server/facades/validation';
import type { Post } from '$lib/server/types/Post';
import type { Category } from '$lib/server/types/Category';

const dateRegex = /^([1-2][0-9]|3[0-1]|0[1-9])\.(0[1-9]|1[0-2])\.([0-9]{4})$/;

export const errorGetter = (postSlug: string) => (field: string) => {
	return `In the post with the slug ${postSlug}, the ${field} has an incorrect format`;
};

export const validatePostAndThrowErrors = (post: Post, categories: Category[]) => {
	const getError = errorGetter(post.slug);

	const schema = builder.object({
		title: builder.string(),
		keywords: builder.string(),
		category: builder.object().valid(...categories),
		date: builder.string().regex(dateRegex),
		description: builder.string(),
		slug: builder.string().regex(/^(-|[a-z0-9])+$/),
		content: builder.string()
	});

	const { error } = schema.options({ abortEarly: false, presence: 'required' }).validate(post);

	if (!error) return;

	const errors = error?.details.map((errorDetail) => getError(errorDetail.context?.key || ''));
	throw { errors };
};
