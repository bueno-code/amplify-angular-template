import { defineFunction } from '@aws-amplify/backend';

export const env = defineFunction({
    environment: {
        API_URL: process.env.API_URL as string
    }
})