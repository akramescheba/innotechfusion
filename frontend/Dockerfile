FROM node:18-alpine AS build
# Repertoire de travail
WORKDIR /app
# Copie de tous les fichiers JSON à la racine.
COPY *.json ./
# Copie du reste des fichiers 
COPY . .
# Installation de angular CLI.
RUN npm install -g @angular/cli
# Installation des dépendances nécéssaires
RUN npm install
# Construction du projet angular
RUN npm run build --prod 

FROM nginx:stable
# Copie du fichier de configuration du serveur NGINX dans le repertoire de l'image
COPY nginx.conf /etc/nginx/nginx.conf
# Copie des fichiers générés lors du build dans le repertoire de nginx
COPY --from=build /app/dist/innotechfusion/ /usr/share/nginx/html/

EXPOSE 80

ENTRYPOINT  ["nginx", "-g", "daemon off;"]
