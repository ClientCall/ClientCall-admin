# ADMIN CLIENT-CALL

```sh
cp .env.dist .env # copiar archivo environment propio 
```

## Correr dev con Docker
```sh
  docker-compose build #Construimos nuestro entorno
  docker-compose up -d #Levantamos el contenedor 
  docker-compose exec adminclientcall /bin/sh
  npm install # si es la primera vez
  npm run start
```

En el navegador [http://localhost:4200](http://localhost:4200)

## Deploy in github pages
```sh
    npm run deploy #Este corre el deploy en modo prod y aot, y finalmente sube todo a github pages
```
```sh
  npm install rxjs@6 rxjs-compat@6 --save # error ERROR TypeError: Object(…) is not a function” using AngularFirestore and firebase
```



