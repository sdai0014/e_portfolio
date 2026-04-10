import Database from "better-sqlite3"
import path from "path"

const db: Database.Database = new Database(path.join(process.cwd(), 'data/data.db'))

db.exec(`
    CREATE TABLE IF NOT EXISTS cv_downloads (
        if INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT,
        downloaded_at TEXT NOT NULL,
        ip TEXT
    )
`)

export default db