import "reflect-metadata";
import { createConnection, Connection, getConnectionOptions } from 'typeorm';


class Database {
  private connection: Connection;

  constructor() {
    this.init();
  }

  async init() {
    const connectionOptions = await getConnectionOptions();

    this.connection = await createConnection(connectionOptions);
  }
}

export default new Database();
