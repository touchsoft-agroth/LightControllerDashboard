import sqlite3

conn = sqlite3.connect('users.db')
cursor = conn.cursor()

cursor.execute('''
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
)
''')

def get_user_by_credentials(username: str, password: str):
    cursor.execute('''
    SELECT id, username FROM users
    WHERE username = ? AND password = ?
    ''', (username, password))

    user = cursor.fetchone()
    if user:
        return {}

