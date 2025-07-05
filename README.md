# 🚀 UNIGIS Worker - Gestión con Docker y PM2

Este proyecto contiene un servicio Node.js para consumir el Web Service SOAP de UNIGIS y reportar eventos de GPS. A continuación se detallan los comandos necesarios para levantar y administrar el servicio tanto con Docker como con PM2.

---

## 🐋 Docker

### 🔧 Construir la imagen

```bash
docker build -t unigis-service .
```

### 🚀 Ejecutar el contenedor

```bash
docker run -d --restart=always --name unigis-worker unigis-service
```

> `--restart=always` asegura que el contenedor se reinicie si se detiene inesperadamente.

### 🧼 Ver logs del contenedor

```bash
docker logs -f unigis-worker
```

### 💪 Detener y eliminar el contenedor

```bash
docker stop unigis-worker
docker rm unigis-worker
```

---

## 🔁 PM2 (Modo servicio local sin contenedor)

### 🚀 Iniciar el servicio

```bash
pm2 start index.js --name unigis-worker
```

### 📜 Ver la lista de procesos activos

```bash
pm2 list
```

### 🩵 Ver logs del proceso

```bash
pm2 logs unigis-worker
```

### 📁 Ver archivos de logs completos

```bash
cat ~/.pm2/logs/unigis-worker-out.log
cat ~/.pm2/logs/unigis-worker-error.log
```

### 🧹 Limpiar logs

```bash
pm2 flush
```

### ♻️ Reiniciar proceso

```bash
pm2 restart unigis-worker
```

### 💨 Eliminar proceso

```bash
pm2 delete unigis-worker
```

### 📏 Guardar procesos actuales para que se levanten al iniciar el sistema

```bash
pm2 save
pm2 startup
```

> Luego ejecuta el comando que PM2 te indique para completar el `startup`.

---

## 📋 Recomendaciones

* Usa **Docker** si necesitas aislamiento y portabilidad.
* Usa **PM2 directamente** si estás en desarrollo local y necesitas que el proceso esté siempre activo y reiniciable.
* Si vas a desplegar en producción, **combina Docker + PM2 + nginx (opcional)** para máxima estabilidad.

---

## 🧠 Autor

Jesus Manuel Bobadilla – Metrica Móvil – Torreón, Coahuila 🇲🇽
