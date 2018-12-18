echo "Trusty64 Dependencies for Docker"
sudo apt-get install -y linux-image-extra-$(uname -r) linux-image-extra-virtual

echo "Docker Seting Up The Repository"
sudo apt-get install -y apt-transport-https ca-certificates curl software-properties-common

echo "Add Docker’s official GPG key"
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

echo "Setting Up the Stable Repository"
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"

echo "Install Docker CE"
sudo apt-get update
sudo apt-get install -y docker-ce

echo "Grant SUDO to Docker"
sudo groupadd docker
sudo usermod -aG docker vagrant

echo "Install Docker Machine"
base=https://github.com/docker/machine/releases/download/v0.16.0 &&
  curl -L $base/docker-machine-$(uname -s)-$(uname -m) >/tmp/docker-machine &&
  sudo install /tmp/docker-machine /usr/local/bin/docker-machine

echo "Docker Test"
docker run docker/whalesay cowsay So Far So Good