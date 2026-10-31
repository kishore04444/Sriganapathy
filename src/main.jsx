import { createRoot } from 'react-dom/client';
import { App } from './app';
import '@fontsource-variable/dm-sans/wght.css';
import '@fontsource-variable/noto-sans-tamil/wght.css';
import '@fontsource-variable/playfair-display/wght.css';
import './styles.css';

createRoot(document.getElementById('root')).render(<App />);
