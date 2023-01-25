import { config } from 'dotenv';
config();
import { CompositionRoot } from './composition-root';

const root = new CompositionRoot();
const app = root.getApp();

app.start();
