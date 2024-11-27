# Usar la imagen oficial de Node.js como base
FROM node:18

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos del proyecto al contenedor
COPY package.json package-lock.json ./

# Instalar las dependencias de Node
RUN npm install

# Copiar el resto del código fuente al contenedor
COPY . .

# Construir la aplicación React
RUN npm run build

# Exponer el puerto en el que se ejecutará la aplicación (el puerto por defecto de React es 3000)
EXPOSE 3000

# Comando para ejecutar el servidor estático en producción
CMD ["npm", "start"]
