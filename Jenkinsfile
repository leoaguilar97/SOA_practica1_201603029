pipeline {
    agent any
    
    triggers {
        githubPush()
    }

    stages {
        stage('Test') {
            steps {
                echo 'Initializing testing'
            }
        }
        
        stage('Build') {
            steps {
                echo 'Initializing build'
            }
        }
        
        stage('Deploy') {
            steps {
                echo 'Initializing deployment'
            }
        }
    }
}