from fabric2 import Connection

ip = '52.91.111.116'
connect_kwargs = { "key_filename" : ['./key.ssh'] }
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