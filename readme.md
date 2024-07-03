# Projet Docker Livecampus
## Promotion ECI P2025 - 1/7/24 au 5/7/24
## Ludivine URHYN  Florian MUGLIONI    Vincent PANOUILLERES 


### Création du projet web React

- Installation de nodejs

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
nvm install 22 # si cela ne fonctionne pas, redémarrer le terminal
# Vérifier que l'installation s'est bien déroulee
node -v
npm -v
```

- Création du squelette d'application react

```bash
# Créer un dossier pour l'application (hors dossier projet)
mkdir app
cd app
# Création de l'application
npx create-react-app app-react -y
```

- Copie du contenu du dossier `app/app-react/src` dans `projet-docker/docker/web/src`.

- Copie du fichier `app/app-react/src/App.js` par un fichier `App.js` afin d'avoir une app basique qui fait des requêtes 
sur l'API.

- Copie du contenu du dossier `app/app-react/public` dans `projet-docker/docker/web/public`.

- Copie du fichier `app/app-react/package.json` dans `projet-docker/docker/web/`.

— — — — — — — — — —

### Création de certificats autosignés pour le reverse proxy

- Génération des fichiers cer et key

```bash
sudo openssl req -x509 -nodes -days 3650 -newkey rsa:2048 -keyout ./proxy/docker-projet.key -out ./proxy/docker-projet.crt -config ./proxy/docker-projet-cert.conf -passin pass:YourStrongPassword
```

— — — — — — — — — —

### Mise en route et arrêt du projet

```bash
# Se placer dans le répertoire
cd projet-docker
# Démarrage du projet
docker compose up -d
# Arrêt du projet
docker compose down
# Arrêt du projet
docker compose down -v
```

> [!NOTE]
> **URLs d'accès à l'application:**
> - https://localhost/ -> Accès appli réact
> - https://localhost/api/ -> Accès à l'API node

