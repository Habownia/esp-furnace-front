# 🔥 ESP-furnace🔥 (frontend)

## 📄 About 📄

It's an application that shows data from sensors connected to the ESP-8266 module. The module monitors the temperature of water in pipes leading from the furnace and the level of gases in a boiler room.

## ⚙️ Installation ⚙️

### 1. Clone the repository and install dependencies

```bash
# Clone this repo from github
git clone https://github.com/Habownia/esp-furnace-front.git
cd esp-furnace-front

# Install dependencies
yarn
```

### 2. Configure your local environment

Copy the .env.local.example file in this directory to .env.local (which will be ignored by Git):

```bash
cp .env.local.example .env.local
```

Fill out the data

```

MONGO_URI=<your_mongo_uri>
DB_NAME=<your_database_name>
COLLECTION_NAME=<your_collection_name>
NEXTAUTH_SECRET=<your secret>
```

#### 2a. NEXTAUTH_SECRET

To generate NEXTAUTH_SECRET you can use https://www.cryptool.org/en/cto/openssl, but openssl is recommended

```bash
openssl rand -base64 32
```

### 3a. Build

Build the app and enjoy!

```bash
yarn build
yarn start
```

### 3b. Develop

Start developing

```bash
yarn dev
```

## 🛠️ Dependencies 🛠️

-   mongodb
-   tailwind
-   typescript
-   daisyui
-   chart.js
-   react-chartjs-2
-   react-icons
