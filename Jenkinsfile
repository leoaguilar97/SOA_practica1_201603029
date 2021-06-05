pipeline {
    agent any
    
    triggers {
        githubPush()
    }

    stages {
        stage('Test') {
            steps {
                echo 'Initializing testing'
                sh 'ls'
            }
        }
        
        stage('Build') {
            steps {
                echo 'Initializing build'
                sh 'ls'
            }
        }
        
        stage('Deploy') {
            steps {
                echo 'Initializing deployment'
                sh 'ls'
            }
        }
    }
}