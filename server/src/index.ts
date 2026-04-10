import express from 'express'
import db from './db'
import path from 'path'
import fs from 'fs'
import cors from 'cors'

const app = express()
const port = 3000

app.use(cors({ origin: 'http://localhost:5173' }))
app.use(express.json())

app.post('/api/cv-download', (req, res) => {
    const { email } = req.body
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
    const filePath = path.join(process.cwd(), 'assets/Shunlong-resume.pdf')

    if (!fs.existsSync(filePath)) {
        return res.status(404).json({ success: false, message: 'CV file not found' })
    }

    try {
        db.prepare(`
            INSERT INTO cv_downloads (email, downloaded_at, ip)
            VALUES (?, ?, ?)
        `).run(email || null, new Date().toISOString(), ip)

        res.download(filePath, 'Shunlong-resume.pdf')
    } catch (error) {
        console.error('Server Error:', error)
        res.status(500).json({ success: false, message: 'Internal Server Error' })
    }
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})