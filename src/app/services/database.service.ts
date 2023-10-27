import { Injectable, signal, WritableSignal } from '@angular/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';

const DB_USERS = 'myuserdb';

export interface User {
  id: number;
  name: string;
  active: number;
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private sqlite: SQLiteConnection = new SQLiteConnection(CapacitorSQLite)
  private db!: SQLiteDBConnection;
  private user: WritableSignal<User[]> = signal<User[]>([]);

  constructor() { }

  async initializePlugin() {
    this.db = await this.sqlite.createConnection (
      DB_USERS,
      false,
      'no-encryption',
      1,
      false
    );

    await this.db.open();

      const schema = `CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        active INTEGER DEFAULT 1
      );`;

      await this.db.execute(schema);
      this.loadUsers();
      return true;

  }

  async loadUsers() {
    const users = await this.db.query('SELECT * FROM USERS;');
    this.user.set(users.values || []);
  }

  // CRUD

}
