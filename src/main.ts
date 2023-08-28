import { config } from 'dotenv';
config();
import { CompositionRoot } from './composition-root';

const root = new CompositionRoot();

const handler = root.errorHandler;
handler.bindUncaught();

const app = root.app;
app.start();
