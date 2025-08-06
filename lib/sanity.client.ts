// lib/sanity.client.ts
import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-08-04'
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
export const useCdn = false

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})

// Helper function for generating image URLs with optimized settings
const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}