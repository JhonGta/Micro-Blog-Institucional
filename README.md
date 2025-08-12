# Micro-Blog Institucional ESPE

Aplicación web simple para publicar y visualizar mensajes cortos (máx 280 caracteres) entre miembros de la Universidad de las Fuerzas Armadas ESPE.

## MVP
- Publicar mensaje
- Listar mensajes recientes

## Ejecución local

### Backend
1. Instala dependencias:
   ```bash
   cd backend
   npm install
   ```
2. Inicia el servidor:
   ```bash
   npm start
   ```

### Frontend
1. Abre `frontend/index.html` en tu navegador.

## Diagrama de Arquitectura

```
+-------------+        POST/GET         +-------------+
|  Frontend   | <--------------------> |  Backend    |
| (HTML/CSS/JS) |      API REST        | (Node/Express) |
+-------------+                       +-------------+
```

## Flujo DevOps

1. Planificación: Tablero Kanban en GitHub Projects/Trello
2. Codificación: Repositorio Git con commits semánticos
3. CI/CD: Pipeline en GitHub Actions para build, test y despliegue
4. Monitoreo: UptimeRobot verifica la URL cada 5 min

## Monitoreo
- **Métricas clave:**
  - Uptime (tiempo de actividad)
  - Tiempo de respuesta del API
  - Tasa de errores 5xx
- **Herramienta:** UptimeRobot (https://uptimerobot.com/)
- **Dashboard:** Adjuntar captura en la entrega final

## Despliegue
- Plataforma sugerida: Vercel, Heroku, Netlify
- URL pública: [pendiente de despliegue]

## Pruebas
- Backend: Jest + Supertest (`backend/__tests__/posts.test.js`)
- Frontend: Prueba de renderizado y publicación manual

## Release Notes
- Versión 1.0.0: MVP funcional con publicación y listado de mensajes
