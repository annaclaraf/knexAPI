const knex = require('../database')

module.exports = {
    async index(req, res) {
        const posts = await 
            knex('posts')
            .join('users', 'users.id', '=', 'posts.user_id')
            .select('posts.*', 'users.name')

        return res.json(posts)
    }, 

    async show(req, res, next) {
        try {
            const { id } = req.params

            const posts = await 
                knex('posts')
                .where({ user_id: id })
                .join('users', 'users.id', '=', 'posts.user_id')
                .select('posts.*', 'users.name')

            res.json(posts)
        } catch (error) {
            next(error)
        }
    },

    async create(req, res, next) {
        try {
            const { content, user_id } = req.body
    
            await knex('posts').insert({
                content,
                user_id
            })

            return res.status(201).send()
        } catch (error) {
            next(error)
        }
    },

    async update(req, res, next) {
        try {
            const { content } = req.body
            const { id } = req.params 

            await knex('posts').update({
                content
            }).where({ id })

            return res.send()

        } catch (error) {
            next(error)
        }
    },

    async delete(req, res, next) {
        try {
            const { id } = req.params 

            await knex('posts').where({ id }).del()

            return res.send()

        } catch (error) {
            next(error)
        }
    }
}