pipeline {
    agent any
    
    triggers {
        githubPush()
    }

    stages {
        stage('Test') {
            steps {
                echo 'Initializing testing'
                bash 'dir'
            }
        }
        
        stage('Build') {
            steps {
                echo 'Initializing build'
                bash 'ls'
            }
        }
        
        stage('Deploy') {
            steps {
                echo 'Initializing deployment'
                bash 'ls' 
            }
        }
    }
}