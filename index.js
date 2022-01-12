const express = require("express")
const axios = require("axios")
const cheerio = require("cheerio")

const PORT = process.env.PORT || 8000

const url = "https://www.rolimons.com/item"

const app = express()

app.get("/", (req, res) => {
    res.send("Welcome to my Roblox Limited Scraper API")
})

app.get("/price/:itemId", (req, res) => {
    const { itemId } = req.params

    axios.get(`${url}/${itemId}`)
        .then((response) => {
            const html = response.data
            const $ = cheerio.load(html)

            let i = 1
            $('div[class="value-stat-data"]', html).each(function () {
                if(i === 1){
                    const text = $(this).text()

                    res.send(text)
                }
                i += 1
            })
        })
})

app.get("/rap/:itemId", (req, res) => {
    const { itemId } = req.params

    axios.get(`${url}/${itemId}`)
        .then((response) => {
            const html = response.data
            const $ = cheerio.load(html)

            let i = 1
            $('div[class="value-stat-data"]', html).each(function () {
                if(i === 2){
                    const text = $(this).text()

                    res.send(text)
                }
                i += 1
            })
        })
})

app.get("/value/:itemId", (req, res) => {
    const { itemId } = req.params

    axios.get(`${url}/${itemId}`)
        .then((response) => {
            const html = response.data
            const $ = cheerio.load(html)

            let i = 1
            $('div[class="value-stat-data"]', html).each(function () {
                if(i === 3){
                    const text = $(this).text()

                    res.send(text)
                }
                i += 1
            })
        })
})

app.get("/demand/:itemId", (req, res) => {
    const { itemId } = req.params

    axios.get(`${url}/${itemId}`)
        .then((response) => {
            const html = response.data
            const $ = cheerio.load(html)

            let i = 1
            $('div[class="value-stat-data"]', html).each(function () {
                if(i === 4){
                    const text = $(this).text()

                    res.send(text)
                }
                i += 1
            })
        })
})

app.get("/acronym/:itemId", (req, res) => {
    const { itemId } = req.params

    axios.get(`${url}/${itemId}`)
        .then((response) => {
            const html = response.data
            const $ = cheerio.load(html)

            let i = 1
            $('h5[class="card-title mb-1 text-light text-truncate stat-data"]', html).each(function () {
                if(i === 5){
                    const text = $(this).text()

                    res.send(text)
                }
                i += 1
            })
        })
})

app.get("/price/original/:itemId", (req, res) => {
    const { itemId } = req.params

    axios.get(`${url}/${itemId}`)
        .then((response) => {
            const html = response.data
            const $ = cheerio.load(html)

            let i = 1
            $('h5[class="card-title mb-1 text-light text-truncate stat-data"]', html).each(function () {
                if(i === 12){
                    const text = $(this).text()

                    res.send(text)
                }
                i += 1
            })
        })
})

app.get("/copies/:itemId", (req, res) => {
    const { itemId } = req.params

    axios.get(`${url}/${itemId}`)
        .then((response) => {
            const html = response.data
            const $ = cheerio.load(html)

            let i = 1
            $('div[class="value-stat-data"]', html).each(function () {
                if(i === 6){
                    const text = $(this).text()

                    res.send(text)
                }
                i += 1
            })
        })
})

app.get("/sales/daily/:itemId", (req, res) => {
    const { itemId } = req.params

    axios.get(`${url}/${itemId}`)
        .then((response) => {
            const html = response.data
            const $ = cheerio.load(html)

            let i = 1
            $('h5[class="card-title mb-1 text-light text-truncate stat-data"]', html).each(function () {
                if(i === 4){
                    const text = $(this).text()

                    res.send(text)
                }
                i += 1
            })
        })
})

app.get("/sellers/:itemId", (req, res) => {
    const { itemId } = req.params

    axios.get(`${url}/${itemId}`)
        .then((response) => {
            const html = response.data
            const $ = cheerio.load(html)

            let i = 1
            $('h5[class="card-title mb-1 text-light text-truncate stat-data"]', html).each(function () {
                if(i === 11){
                    const text = $(this).text()

                    res.send(text)
                }
                i += 1
            })
        })
})

app.get("/copies/available/:itemId", (req, res) => {
    const { itemId } = req.params

    axios.get(`${url}/${itemId}`)
        .then((response) => {
            const html = response.data
            const $ = cheerio.load(html)

            let i = 1
            $('div[class="value-stat-data"]', html).each(function () {
                if(i === 7){
                    const text = $(this).text()

                    res.send(text)
                }
                i += 1
            })
        })
})

app.get("/copies/premium/:itemId", (req, res) => {
    const { itemId } = req.params

    axios.get(`${url}/${itemId}`)
        .then((response) => {
            const html = response.data
            const $ = cheerio.load(html)

            let i = 1
            $('div[class="value-stat-data"]', html).each(function () {
                if(i === 8){
                    const text = $(this).text()

                    res.send(text)
                }
                i += 1
            })
        })
})

app.get("/copies/deleted/:itemId", (req, res) => {
    const { itemId } = req.params

    axios.get(`${url}/${itemId}`)
        .then((response) => {
            const html = response.data
            const $ = cheerio.load(html)

            let i = 1
            $('div[class="value-stat-data"]', html).each(function () {
                if(i === 9){
                    const text = $(this).text()

                    res.send(text)
                }
                i += 1
            })
        })
})

app.get("/copies/hoarded/:itemId", (req, res) => {
    const { itemId } = req.params

    axios.get(`${url}/${itemId}`)
        .then((response) => {
            const html = response.data
            const $ = cheerio.load(html)

            let i = 1
            $('div[class="value-stat-data"]', html).each(function () {
                if(i === 12){
                    const text = $(this).text()

                    res.send(text)
                }
                i += 1
            })
        })
})

app.get("/owners/:itemId", (req, res) => {
    const { itemId } = req.params

    axios.get(`${url}/${itemId}`)
        .then((response) => {
            const html = response.data
            const $ = cheerio.load(html)

            let i = 1
            $('div[class="value-stat-data"]', html).each(function () {
                if(i === 10){
                    const text = $(this).text()

                    res.send(text)
                }
                i += 1
            })
        })
})

app.get("/owners/premium/:itemId", (req, res) => {
    const { itemId } = req.params

    axios.get(`${url}/${itemId}`)
        .then((response) => {
            const html = response.data
            const $ = cheerio.load(html)

            let i = 1
            $('div[class="value-stat-data"]', html).each(function () {
                if(i === 11){
                    const text = $(this).text()

                    res.send(text)
                }
                i += 1
            })
        })
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))