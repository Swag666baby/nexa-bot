echo "installing libraries..."

yarn add axios fs pino @adiwajshing/baileys@4.4.0 dotenv gtts g-i-s @hapi/boom lodash moment-timezone child_process path babytube youtube-sr sharp qrcode-terminal

npm install -g forever

echo "installing necessary packages..." 

apt-get install python3 -y

echo "starting service..."

forever start --minUptime 1000 --spinSleepTime 1000 index.js
