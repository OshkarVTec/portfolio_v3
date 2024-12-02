import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            tags: z.array(z.string()),
            cover: image().refine(
                (img) => {
                    const aspectRatio = img.width / img.height;
                    return Math.abs(aspectRatio - 16 / 9) < 0.01;
                },
                {
                    message: 'Image must have a 16:9 aspect ratio'
                }
            ),
            coverAlt: z.string()
        })
});

export const collections = {
    projects: projectsCollection
};
