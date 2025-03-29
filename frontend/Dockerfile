#Construction de l'application
FROM node:18 AS build

#Repertoire de travail
WORKDIR /app

#COPY des fichiers JSON nécéssaire

COPY *json ./

#Copie du rests des fichiers
COPY . .

#Installation du cli angular
RUN npm install @angular/cli 

#Installation des dépendances
RUN npm install

#Construction de l'image
RUN npm run build


FROM nginx:stable

#Copie du fichier de config dans le repertoir du serveur nginx
COPY ./nginx.conf /etc/nginx/nginx.conf

#Copie du buils dans le repertoir du serveur nginx
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off"]


