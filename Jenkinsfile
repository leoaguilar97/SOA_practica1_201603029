pipeline {
    agent any
    
    triggers {
        githubPush()
    }

    stages {
        stage('Test') {
            steps {
                echo 'Initializing testing'
                ls
            }
        }
        
        stage('Build') {
            steps {
                echo 'Initializing build'
                ls
            }
        }
        
        stage('Deploy') {
            steps {
                echo 'Initializing deployment'
                ls
            }
        }
    }
}