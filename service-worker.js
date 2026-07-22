// Service worker mínimo — necessário para o navegador considerar o app "instalável".
// Não faz cache agressivo de dados (os leads sempre vêm da planilha em tempo real).
self.addEventListener('install', (e) => { self.skipWaiting(); });
self.addEventListener('activate', (e) => { self.clients.claim(); });
self.addEventListener('fetch', (e) => {
  // Passa direto — não intercepta chamadas ao Apps Script nem dados dinâmicos.
  return;
});
