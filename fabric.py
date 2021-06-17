from fabric2 import Connection
import os
import sys

ip = '34.136.26.17'
key_path = "C:\\Users\\leoag\\.ssh\\id_rsa"

try:
    ip = os.environ['DEPLOYMENT_IP']
    key_path = os.environ['DEPLOYMENT_KEY_PATH']
    print("Cargados valores del ambiente")
except:
    print("Cargados valores default")

print('*** INICIANDO DEPLOYMENT ***')
print('* Conectando a la IP: ' + ip)
print('* Path a la llave SSH: ' + key_path)

connect_kwargs = { "key_filename" : [key_path] }
c = Connection(host= ip, user= "leoag", connect_kwargs= connect_kwargs)

def sh(command):
    try:
        print("$ " + command)
        c.run(command)
        return True
    except UnicodeEncodeError:
        return True
    except Exception as e:
        print("$ Error ejecutando '" + command + "'")
        print(e)
        return False

def echo(str):
    sh("echo \"" + str + "\" >> deployment.log")

def deploy():
   
    #echo("Instalando NodeJS")
    #sh("sudo apt update");

    #sh("curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -")
    #sh("sudo apt-get install -y nodejs")

    #echo("NodeJS instalado y actualizado correctamente")

    #echo("Instalando PM2")
    #sh("sudo npm install pm2 -g")

    #echo("Descargando codigo del repositorio")
    #sh("git clone https://github.com/leoaguilar97/SOA_practica1_201603029.git")
    
    #echo("Instalando API")
    #sh("cd ./SOA_practica1_201603029/server && sudo npm ci")
    #if not sh("sudo pm2 restart api"):
        #print("Error realizando deploy de API, intentando iniciarla primero")
        #if not sh("cd ./SOA_practica1_201603029/server && sudo pm2 start ./index.js --name api"):
            #sys.exit("Error realizando el deploy de API")

    sh("sudo pm2 restart api")

    #echo("Instalando cliente")
    #sh("cd ./SOA_practica1_201603029/client && sudo npm ci")
    #sh("cd ./SOA_practica1_201603029/client && npm run-script build")
    #sh("cd ./SOA_practica1_201603029/client && pm2 stop client")
    #sh("cd ./SOA_practica1_201603029/client && pm2 serve build 8082 --spa -f --name client")
    
    sh("echo \"Deployment realizado correctamente\" >> deployment.log")

deploy()