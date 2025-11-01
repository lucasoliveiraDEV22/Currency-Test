pipeline {
    agent any
   options {
        ansiColor('xterm') // apenas para cores no log
    }

    environment {
        CYPRESS_CACHE_FOLDER = "${WORKSPACE}/.cache/Cypress"
    }

    stages {
        stage('Clonar Repositório') {
            steps {
                git branch: 'master', url: 'https://github.com/lucasoliveiraDEV22/Currency-Test.git'
            }
        }

        stage('Instalar Dependências') {
            steps {
                script {
                    nodejs(nodeJSInstallationName: 'node-22.15') {
                        bat 'npm install' // Instala as dependências do Node.js
                    }
                }
            }
        }
        stage('Configurar Cypress') {
            steps {
                script {
                    nodejs(nodeJSInstallationName: 'node-22.15') {
                        bat 'npx cypress install' // Instala o Cypress
                    }
                }
            }
        }

            stage('Testes do Cypress'){
                steps{
                    catchError(buildResult: 'UNSTABLE', message: "Algo deu errado durante a execução dos testes do Cypress", stageResult: 'UNSTABLE') {
                        script {
                            nodejs(nodeJSInstallationName: 'node-22.15') {
                                bat 'npx cypress run --spec "cypress/e2e/currency-page.cy.js" --browser chrome' 
                            }
                        }
                    }
                }
            }

    }

    post {
        always {
            cleanWs() // Limpeza do workspace após execução
        }

        success {
            echo 'Pipeline executado com sucesso!'
        }

        failure {
            echo 'Pipeline falhou!'
        }
    }
}
