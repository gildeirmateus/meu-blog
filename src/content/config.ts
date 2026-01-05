import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		pubDate: z.date(), // O Decap salva data compatível
		description: z.string(),
		author: z.string().optional(),
		coverImage: z.string().optional(), // String simples para o caminho da imagem
		state: z.enum(['MG', 'SP', 'Geral']).optional(),
	}),
});

export const collections = {
	'blog': blogCollection,
};