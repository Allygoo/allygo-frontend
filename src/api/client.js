// Determinar base de la API.
// En Vite, SOLO las variables que empiezan por VITE_ se exponen al cliente.
// Aceptamos un fallback legacy (API_GATEWAY_URL) por si existía antes, pero se recomienda VITE_API_GATEWAY_URL.
const RAW_API_BASE = import.meta.env.VITE_API_GATEWAY_URL || import.meta.env.API_GATEWAY_URL || '';

// Normalizamos: sin barras finales (excepto si está vacío) para concatenar limpiamente.
const API_BASE = RAW_API_BASE ? RAW_API_BASE.replace(/\/+$/, '') : '';

if (!API_BASE) {
  // No lanzamos error inmediato para permitir uso de proxy local (Vite server proxy) con rutas relativas (/api/...)
  // Pero avisamos para que en producción no se olvide configurar.
  // eslint-disable-next-line no-console
  console.warn('[api] VITE_API_GATEWAY_URL no está definida. Usando rutas relativas. Configura .env.local si necesitas dominio completo.');
}

function buildUrl(path) {
  const normalizedPath = path.startsWith('/') ? path : '/' + path;
  // Si API_BASE está vacío, devolvemos simplemente la ruta (útil con proxy Vite)
  return API_BASE + normalizedPath;
}

async function request(path, { method = 'GET', body, headers = {}, signal } = {}) {
  const opts = {
    method,
    headers: {
      'Accept': 'application/json',
      ...(body && !(body instanceof FormData) ? { 'Content-Type': 'application/json' } : {}),
      ...headers
    },
    signal
  };
  if (body) {
    opts.body = body instanceof FormData ? body : JSON.stringify(body);
  }

  const url = buildUrl(path);
  const res = await fetch(url, opts);

  // Manejo de status
  if (!res.ok) {
    let errorPayload;
    try { errorPayload = await res.json(); } catch { errorPayload = { message: res.statusText }; }
    const error = new Error(`HTTP ${res.status} en ${url}: ${errorPayload.message || 'Error'}`);
    error.status = res.status;
    error.details = errorPayload;
    throw error;
  }

  // Intentar parsear JSON; si no, retornar texto
  const contentType = res.headers.get('content-type') || '';
  if (contentType.includes('application/json')) {
    return res.json();
  }
  return res.text();
}

export const api = {
  get: (path, opts) => request(path, { ...opts, method: 'GET' }),
  post: (path, body, opts) => request(path, { ...opts, method: 'POST', body }),
  put: (path, body, opts) => request(path, { ...opts, method: 'PUT', body }),
  del: (path, opts) => request(path, { ...opts, method: 'DELETE' }),
};