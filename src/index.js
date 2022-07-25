import 'dotenv/config'
import { startServer } from "@spotify/lighthouse-audit-service";
import pkg from 'pg';
const { Pool } = pkg;
const conn = new Pool();
startServer({}, conn);
