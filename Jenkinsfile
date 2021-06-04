pipeline {
    agent { label 'master'}
    
    stages {
        stage ('build') {
            sh "echo building"
        }
        stage ('test') {
            steps {
                sh "echo testing"
            }
        }
        
        stage ('deploy') {
            steps {
                sh "echo deploy"
            }
        }
    }
}