pipeline {
    agent any
    
    triggers {
        githubPush()
    }

    environment {
        LC_ALL = 'en_US.UTF-8'
        LANG    = 'en_US.UTF-8'
        LANGUAGE = 'en_US.UTF-8'
    }

    stages {
        stage('Test') {
            steps {
                echo 'Initializing testing'
                dir("server"){
                    bat 'npm ci'
                    bat 'npm test'
                }
            }
        }
        
        stage('Build') {
            steps {
                echo 'Initializing build'
            }
        }
        
        stage('Deploy') {
            steps {
                echo 'Initializing Deployment'
                bat 'python ./fabric.py'
            }
        }
    }
}