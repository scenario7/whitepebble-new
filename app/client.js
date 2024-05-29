import { createClient } from '@sanity/client'

const client = createClient ({
    projectId: 'rkv863ft', 
    dataset: 'production', 
    useCdn: false,
    apiVersion : '2024-05-05'
})

export default client