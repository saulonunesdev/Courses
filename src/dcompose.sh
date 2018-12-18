echo "Install Docker Compose"
sudo curl -L "https://github.com/docker/compose/releases/download/1.23.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

echo "Docker Test"
docker run docker/whalesay cowsay So Far So Good

echo "Test Docker Compose"
docker-compose --version

