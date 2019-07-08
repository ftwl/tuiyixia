import {
    get,
} from '@/http/axios'

class Book {
    async getBook(id) {
        const res = await get(`/book/${id}`)
        return res
    }
}

export default new Book()