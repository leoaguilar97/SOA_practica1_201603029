pipeline {
    agent any
    
    triggers {
        githubPush()
    }

    stages {
        stage('Test') {
            steps {
                echo 'Initializing testing'
                bat 'dir'
                bat 'cd server'
                bat 'dir'
                bat 'npm ci'
                bat 'npm test'
                bat 'cd ../client'
                bat 'npm ci'
            }
        }
        
        stage('Build') {
            steps {
                echo 'Initializing build'
                bat 'dir'
            }
        }
        
        stage('Deploy') {
            steps {
                echo 'Initializing deployment'
                bat 'dir' 
            }
        }
    }
}