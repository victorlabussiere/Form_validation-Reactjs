class Services {
    constructor(baseUrl) {
        this.baseUrl = baseUrl
    }

    async indexAll() {
        const response = await fetch(this.baseUrl + '/api', {
            method: 'GET',
            headers: { 'Content-type': 'application/json' }
        })
            .then(res => res.json())
            .catch(err => console.error('Não foi possível realizar a operação', err))

        return response
    }

    async show(id) {
        const response = await fetch(this.baseUrl + '/api/' + id, {
            method: 'GET',
            headers: { 'Content-type': 'application/json' }
        })
            .then(res => res.json())
            .catch(err => console.error('Não foi possível realizar a operação', err))

        return response
    }

    async store(data) {
        const response = await fetch(this.baseUrl + '/api', {
            method: "POST",
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .catch(err => console.error('Não foi possível guardar o objeto', err))

        return response
    }

    async update(data, id) {
        const response = await fetch(this.baseUrl + '/api/' + id, {
            method: "PATCH",
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .catch(err => console.error('Não foi possível atualizar o objeto', err))

        return response
    }

    async destroy(id) {
        const response = await fetch(this.baseUrl + '/api/' + id, {
            method: "DELETE"
        }).then(res => { if (res.ok) return true })
            .catch(err => console.error('Não foi possível deletar o objeto!'))

        return response
    }

    async resetJsonServer() {
        const list = await fetch(this.baseUrl + '/api', {
            method: "GET",
            headers: { 'Content-type': 'application/json' }
        }).then(res => res.json())
        if (list.length <= 0) return
        list.map(async item => {
            const id = item.id
            await fetch(`${this.baseUrl}/api/${id}`, {
                method: 'DELETE',
                headers: { 'Content-type': 'application/json' }
            })
        })
    }
}



export default Services; 