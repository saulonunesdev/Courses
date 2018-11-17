echo "Yarn Package"
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

echo "Install Yarn"
sudo apt-get update && sudo apt-get install yarn

echo "Chech Yarn Installation"
yarn --version