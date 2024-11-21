# UpBase Challenge

Este projeto é uma aplicação React que implementa duas telas do protótipo de um sistema de locação de 
diárias em acomodações.

---

## 🛠️ Tecnologias Usadas

- **React**: Biblioteca JavaScript para criação de interfaces de usuário.
- **React Router DOM**: Gerenciamento de rotas na aplicação.
- **Material-UI**: Componentes estilizados para React.
- **Styled-Components**: Estilização de componentes com CSS-in-JS.
- **Material Icons**: ícones personalizados do Material Icons.

---

## 🔧 Instalação e Configuração

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```

2. **Navegue até o diretório do projeto**:

   ```bash
   cd challenge_upbase
   ```

3. **Instale as dependências**:

   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento**:

   ```bash
   npm start
   ```

5. Acesse o projeto no navegador em: [http://localhost:3000](http://localhost:3000).

---

## 🌟 Estrutura do Projeto

```plaintext
challenge_upbase/
├── node_modules/              # Dependências instaladas pelo npm
├── public/                    # Arquivos públicos (HTML, favicons, etc.)
├── src/                       # Código-fonte do projeto
│   ├── Components/            # Componentes reutilizáveis
│   │   ├── ArrowBack/         # Componente ArrowBack
│   │   ├── BottomNavigationBar/ # Barra de navegação inferior
│   │   ├── Button/            # Componente Button
│   │   ├── Carousel/          # Componente Carousel
│   │   └── RegisterButton/    # Componente RegisterButton
│   ├── pages/                 # Páginas do aplicativo
│   │   ├── Calendar/          # Página Calendar
│   │   ├── Chat/              # Página Chat
│   │   ├── Home/              # Página Home
│   │   ├── Profile/           # Página Profile
│   │   └── Table/             # Página Table
│   ├── App.css                # Estilo global do aplicativo
│   ├── App.js                 # Componente principal do aplicativo
│   ├── App.test.js            # Testes para o App
│   ├── index.css              # Estilo CSS global
│   ├── index.js               # Ponto de entrada do React
│   ├── logo.svg               # Logotipo do aplicativo
│   ├── reportWebVitals.js     # Métricas de desempenho
│   ├── setupTests.js          # Configuração para testes
│   └── styles.js              # Estilos globais (styled-components)
```

---

## ⚙️ Roteamento

O projeto utiliza o `react-router-dom` para navegação entre as seguintes páginas:

| Página       | Rota         | Descrição                                    |
|--------------|--------------|----------------------------------------------|
| Home         | `/`          | Página inicial da aplicação.                 |
| Calendar     | `/calendar`  | Exibe o calendário.                          |
| Table        | `/table`     | Mostra uma tabela de dados.                  |
| Chat         | `/chat`      | Página de chat para comunicação.             |
| Profile      | `/profile`   | Página de perfil do usuário.                 |

---

## 🚀 Melhorias Futuras

- Adicionar animações de transição entre as páginas.
- Implementar autenticação para a página de perfil.
- Criar páginas de erro personalizadas (404, 500).
- Adicionar suporte para temas claro e escuro.

---

## 📝 Licença

Este projeto está sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.

---

## 📧 Contato

Se tiver dúvidas ou sugestões, entre em contato:

- **E-mail**: erickgomes@ccc.ufcg.edu.br
- **LinkedIn**: [Erick Araken](https://www.linkedin.com/in/erickaraken/)
