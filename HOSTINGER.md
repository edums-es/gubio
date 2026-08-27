# Publicação na Hostinger via Git

Este projeto publica uma versão estática para a branch `hostinger`. Essa branch contém apenas os arquivos prontos para o servidor (`index.html`, CSS, JavaScript, imagens e `.htaccess`).

## Primeira publicação

1. Faça commit e push da branch `main` para o GitHub.
2. No GitHub, abra **Settings → Actions → General** e confirme que as permissões de workflow permitem **Read and write permissions**.
3. Se for medir campanhas, crie o segredo `VITE_META_PIXEL_ID` em **Settings → Secrets and variables → Actions**. Sem ele, a página continua funcionando, mas não envia `PageView` e `Lead` ao Pixel.
4. Aguarde o workflow **Publicar estático na Hostinger** concluir. Ele cria ou atualiza a branch `hostinger`.
5. No hPanel: **Sites → Gerenciar → Git → Criar novo repositório**.
6. Informe `https://github.com/edums-es/gubio.git`, selecione a branch `hostinger` e deixe o **Caminho de instalação** vazio para publicar em `/public_html`.
7. Ative **Auto Deployment** no hPanel e configure o webhook no GitHub, se quiser que a Hostinger faça o pull automaticamente após cada publicação.

> Para repositório privado, gere a chave SSH no hPanel e cadastre-a no GitHub antes de criar o repositório na Hostinger.
