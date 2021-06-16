from fabric2 import Connection
import os

ip = os.environ('DEPLOYMENT_IP') or '52.91.111.116'
key_path = os.environ('DEPLOYMENT_KEY_PATH') or './key.shh'

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
    except:
        print("$ Error ejecutando '" + command + "'")
        return False

def deploy():
    sh("echo \"Deployment realizado correctamente\" >> deployment.log")

deploy()