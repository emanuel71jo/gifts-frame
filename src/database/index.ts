import "reflect-metadata";
import { createConnection, Connection } from 'typeorm';
import console = require("console");


class Database {
  private connection: Connection;

  constructor() {
    this.init();
  }

  async init() {
    this.connection = await createConnection();
  }
}

export default new Database();
