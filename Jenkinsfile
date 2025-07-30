pipeline {
    agent any

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
                    nodejs(nodeJSInstallationName: 'node-14') {
                        sh 'npm install' // Instala as dependências do Node.js
                    }
                }
            }
        }

        stage('Rodar Testes Cypress') {
            steps {
                script {
                    nodejs(nodeJSInstallationName: 'node-14') {
                        sh 'npx cypress run --headless' // Executa os testes do Cypress
                    }
                }
            }
        }

        stage('Archivar Relatório de Testes') {
            steps {
                archiveArtifacts artifacts: '**/mochawesome-report/**', allowEmptyArchive: true
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
