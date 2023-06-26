# VentaDeCasas_Backend

## Proyecto de "Venta de casas con seguimiento de pagos y tramites" del lado del Back

## Inicio del Proyecto

- 1. Instalar Typescript de manera Global:

```bash
  npm install -g typescript
```

- 2. Inicializar el proyceto de Node:

```bash
   mkdir ventaDeCasas && cd ventaDeCasas/ && npm init -y
```

- 3. Crear el archivo ts:

```bash
    touch app.ts
```

- 4. Crear el archivo de Typescript:

```bash
    tsc --init
```

- 5. Configuramos el `tsconfig.json`: dentro de este archivo, quetamos los comentarios para habilitar las sig. instrucciones

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "sourceMap": true,
    "outDir": "./dist",
    "strict": true,
    "moduleResolution": "node",
    "esModuleInterop": true
  }
}
```

- 6. Agregamos las dependencias necesarias para correr la aplicacion en modo desarrollo:

```bash
    npm i tslint typescript --save-dev
```

- 8. Agregamos las dependencias necesarias para correr la aplicacion:

```bash
    npm i express tslint typescript cors dotenv bcrypt jsonwebtoken express-validator morgan sequelize web-push pg pg-hstore
```

```bash
    npm i --save-dev tslint typescript nodemon @types/express @types/bcrypt @types/cors @types/jsonwebtoken
```

- 8. Ejecutar la el archivo de configuracion `tslint` desde una consola que reconozca los directorios:

```bash
    ./node_modules/.bin/tslint --init
```

- 9. Configurar el archivo `tslint.json`:

```bash
   {
        "rules": {
             "no-console": false,
        },
   }
```

- 10. Compilar el codigo ts a js:

```bash
    tsc -w
```

- 11. Crear el archivo `.gitignore`:

```bash
    touch .gitignore
```

- 12. Agregar las siguientes lineas al archivo `.gitignore`:

```bash
    .vscode
    dist/*
    coverage/*
    *.log*
    *~
    **/*.map
    **/__pycache__/
    /build/
    /.idea/**
    # Ignore all files and folders starting with underscore
     *_*
      # Ignore the file named ".
      .*
```

## Instalación del servidor y base de datos en AWS EC2

```bash
    #Creando un nuevo grupo de seguridad para permitir conexiones SSH por defecto (puede ser modificado)
    aws ec2 create-security-group \
    --description 'SSH' \
    --group-name ssh-access \
    --vpc-id vpc-634785f2

    #Agregamos la regla que permite conexión
    SSH desde cualquier IP pública
    aws ec2 authorize-security-group-ingress
    --protocol tcp --port 22 --cidr 0.0.0.0/0 \
    --source-group sg-c0d4e5dc \
    --group-name ssh-access


    #Instalamos Ubuntu Server 20.04 LTS en una instancia con 2 vCPU's y 4GB RAM
    aws ec2 run-...
```
