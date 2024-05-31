import { createClient } from '@sanity/client'

const client = createClient ({
    projectId: 'rkv863ft', 
    dataset: 'production', 
    useCdn: true,
    apiVersion : '2024-05-05'
})

export default client