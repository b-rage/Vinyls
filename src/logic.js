import axios from 'axios'

// json-server --watch vinyls.json --port 5000


const logic = {

    _userId: sessionStorage.getItem('userId') || null,
    _token: sessionStorage.getItem('token') || null,


    registerUser(email, username, password, bio) {

        if (!email.trim()) throw Error('email is empty or blank')
        if (!username.trim()) throw Error('username is empty or blank')
        if (!password.trim()) throw Error('password is empty or blank')
       
        if (typeof email !== 'string') throw TypeError(`${email} is not a string`)
        if (email.match(/^(([^<>()\[\]\\.,;:\s@“]+(\.[^<>()\[\]\\.,;:\s@“]+)*)|(“.+“))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) === null) throw Error(`${email} is an invalid email`)
        if (typeof username !== 'string') throw TypeError(`${username} is not a string`)
        if (typeof password !== 'string') throw TypeError(`${password} is not a string`)
        


        return fetch('https://skylabcoders.herokuapp.com/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({ email, username, password })
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) throw Error(res.error)
            })
    },

    login(username, password) {
        if (typeof username !== 'string') throw TypeError(`${username} is not a string`)
        if (typeof password !== 'string') throw TypeError(`${password} is not a string`)

        if (!username.trim()) throw Error('username is empty or blank')
        if (!password.trim()) throw Error('password is empty or blank')

        return fetch('https://skylabcoders.herokuapp.com/api/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({ username, password })
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) throw Error(res.error)

                const { id, token, username } = res.data

                this._userId = id
                this._token = token
                this._username = username

                sessionStorage.setItem('userId', id)
                sessionStorage.setItem('token', token)
            })
    },

    logout() {
        
        this._userId = null
        this._token = null

        sessionStorage.removeItem('userId')
        sessionStorage.removeItem('token')
    },

    get loggedIn() {

        return !!this._userId
    },

    getVinyls() {
        const res = axios.get('http://localhost:5000/vinyls')
        console.log(res)
        return res
    },

    retrieveCurrentUser() {
        const AuthStr = 'Bearer '.concat(this._token)
        const user = axios.get(`https://skylabcoders.herokuapp.com/api/user/${this._userId}`, 
                                { headers: { Authorization: AuthStr } })

        console.log(user)
        
        return user
        
    }
    
    
}

export default logic