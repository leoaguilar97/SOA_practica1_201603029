pipeline {
    agent any
    
    triggers {
        githubPush()
    }

    stages {
        stage('Test') {
            steps {
                echo 'Initializing testing'

                dir("server"){
                    bat 'npm ci'
                    bat 'npm test'
                }

                dir("client"){
                    bat 'npm ci'
                }
            }
        }
        
        stage('Build') {
            steps {
                echo 'Initializing build'
                
                dir ("client"){
                    bat 'npm ci'
                    bat 'npm run-script build'
                }
            }
        }
        
        stage('Deploy') {
            steps {
                echo 'Initializing deployment'

                dir("server"){
                    bat 'pm2 start index.js --name api'
                }

                dir("client"){
                    bat 'pm2 serve build 8082 --spa'
                }
            }
        }
    }
}