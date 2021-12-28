import dotenv from 'dotenv';
import { cleanEnv, port } from 'envalid';

dotenv.config();

export const config = cleanEnv(process.env, {
  PORT: port({ default: 5101 }),
});
