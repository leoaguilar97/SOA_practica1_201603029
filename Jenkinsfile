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