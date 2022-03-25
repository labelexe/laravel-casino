
# Docker

Для выполнения команд в docker-образе

Чтобы узнать id контейнера используйте
```
docker ps
```

Выполнение команды внутри контейнера:
```
docker exec -it <container name> <command>
```

* добавляем в host домен back.izicash.bet
* поднять конейнеры 
```
docker-compose up 
```
* пересоздать и поднять контейнеры
```
docker-compose up --build 
```

## Docker commands:
* Заполнить базу данных фикстурными данными
```
docker exec -it back.izicash.bet php /var/www/html/artisan db:seed
```
* Заполнить базу данных фикстурными данными из определённого файл
```
docker exec -it back.izicash.bet php /var/www/html/artisan db:seed --class=FileServiceSeeder
```
* Пример копирования vendor в папку проекта 
```
docker cp <container_id>:/var/www/html/vendor ./vendor
```
* Генерация документации
```
docker exec -it back.izicash.bet php /var/www/html/artisan "l5-swagger:generate"
```

### Запуск сокетов
* cd PRWebSocket
* node Game2.js


### XDebug for vscode

add this to the launch.json

```

{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Listen for Xdebug",
            "type": "php",
            "request": "launch",
            "port": 9013,
            "pathMappings": {
                "/var/www/html": "${workspaceRoot}",
            }
        },
        {
            "name": "Launch currently open script",
            "type": "php",
            "request": "launch",
            "program": "${file}",
            "cwd": "${fileDirname}",
            "port": 0,
            "runtimeArgs": [
                "-dxdebug.start_with_request=yes"
            ],
            "env": {
                "XDEBUG_MODE": "debug,develop",
                "XDEBUG_CONFIG": "client_port=${port}"
            }
        },
        {
            "name": "Launch Built-in web server",
            "type": "php",
            "request": "launch",
            "runtimeArgs": [
                "-dxdebug.mode=debug",
                "-dxdebug.start_with_request=yes",
                "-S",
                "localhost:0"
            ],
            "program": "",
            "cwd": "${workspaceRoot}",
            "port": 9003,
            "serverReadyAction": {
                "pattern": "Development Server \\(http://localhost:([0-9]+)\\) started",
                "uriFormat": "http://localhost:%s",
                "action": "openExternally"
            }
        }
    ]
}


```
