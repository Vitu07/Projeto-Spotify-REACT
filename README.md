# Spotify Clone - React

Um clone do Spotify desenvolvido em React, com funcionalidades como busca de artistas, exibição de playlists e uma interface moderna e responsiva.

## 💻 Demonstração

![image](https://github.com/user-attachments/assets/4eaa4ccf-45e8-4026-8d7e-66e82a3826f7)
---
![image](https://github.com/user-attachments/assets/2d13ed7a-2df9-46b6-af3c-eebfb32d5818)


---

## 📋 Funcionalidades

- **Barra de Busca**: Pesquise artistas e exiba cards com informações.
- **Playlists Padrão**: Navegue por playlists pré-definidas.
- **Integração com API**: Dados dos artistas carregados a partir de um JSON Server.

---

## 🛠️ Tecnologias Utilizadas

- **HTML**: Estruturação da interface do usuário.
- **CSS**: Estilização personalizada para replicar o design do Spotify.
- **JavaScript**: Lógica de interação e dinamismo.
- **React**: Biblioteca JavaScript para construção da interface.
- **JSON Server**: Simulação de uma API RESTful para carregar dados dos artistas.

---

## 📦 Como Executar o Projeto

Siga os passos abaixo para rodar o projeto localmente.

### Pré-requisitos

- Node.js instalado.
- NPM ou Yarn instalado.

### Passos

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/Vitu07/Projeto-Spotify-REACT.git
   ```
2. **Instale as dependências**:
   ```bash
   cd Projeto-Spotify-REACT
   npm install
   ```
3. **Inicie o JSON Server**:
   - Certifique-se de ter o JSON Server instalado globalmente:
     ```bash
     npm install -g json-server
     ```
   - Inicie o servidor:
     ```bash
     json-server --watch api-artists/db.json --port 3001
     ```
4. **Inicie o projeto React**:
   ```bash
   npm start
   ```
6. **Acesse o projeto**:

    Abra o navegador e acesse:
   ```bash
   http://localhost:3000
   ```
## 🧩 Estrutura do Projeto
   ```bash
Projeto-Spotify-REACT/
├── api-artists/  # Dados dos artistas (JSON Server)
├── public/
├── src/
│   ├── assets/              # Imagens e ícones
│   ├── componentes/         # Componentes React
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── Main/
│   │   └── Sidebar/
│   ├── App.css
│   ├── App.js                # Componente principal
│   ├── App.test.js       
│   └──index.js 
├── README.md   
├── package-lock.json
└── package.json
  ```
## 👨‍💻 Autor
 **Vitor De Morais Felix** 
 
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/vitor-de-morais-a84b53247/) 
