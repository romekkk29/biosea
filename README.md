# Biosea Soluciones — Landing Page

Next.js 14 · TailwindCSS · TypeScript · SSR con `output: standalone`

## Desarrollo local

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Build de producción

```bash
npm run build
npm start
```

## Deploy en Google Cloud + Nginx

### 1. Build y copia al servidor

```bash
npm run build
# El output está en .next/standalone/
```

Copiar al servidor:
```bash
rsync -az .next/standalone/ user@tu-server:/app/biosea/
rsync -az .next/static/ user@tu-server:/app/biosea/.next/static/
rsync -az public/ user@tu-server:/app/biosea/public/
```

### 2. Arrancar con PM2 (recomendado)

```bash
# En el servidor
npm install -g pm2
cd /app/biosea
pm2 start server.js --name biosea --env production
pm2 save
pm2 startup
```

### 3. Configuración Nginx

```nginx
server {
    listen 80;
    server_name bioseasoluciones.com www.bioseasoluciones.com;

    # Redirigir a HTTPS
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    server_name bioseasoluciones.com www.bioseasoluciones.com;

    ssl_certificate     /etc/letsencrypt/live/bioseasoluciones.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/bioseasoluciones.com/privkey.pem;

    # Archivos estáticos directamente desde Nginx (más rápido)
    location /_next/static/ {
        alias /app/biosea/.next/static/;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    location /favicon.ico {
        alias /app/biosea/public/favicon.ico;
    }

    # Todo lo demás → Next.js
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 4. SSL gratis con Certbot

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d bioseasoluciones.com -d www.bioseasoluciones.com
```

### 5. Google Search Console (para aparecer en Google)

1. Ir a https://search.google.com/search-console
2. Agregar propiedad con el dominio `bioseasoluciones.com`
3. Verificar (método recomendado: DNS TXT record o HTML file)
4. Enviar sitemap: `https://bioseasoluciones.com/sitemap.xml`

> Con bajo tráfico, puede tardar 1-4 semanas en indexarse. El sitemap + JSON-LD
> de LocalBusiness ayudan significativamente.

## Variables de entorno

No se requieren variables de entorno para la versión actual (sin base de datos ni AI).

Para futuras features de AI, crear `.env.local`:
```
OPENAI_API_KEY=sk-...
```

## Estructura del proyecto

```
app/
├── layout.tsx     # SEO metadata + JSON-LD + fuentes
├── page.tsx       # Landing page completa
├── globals.css    # Estilos globales (Tailwind)
├── sitemap.ts     # Genera /sitemap.xml automáticamente
└── robots.ts      # Genera /robots.txt automáticamente
```
