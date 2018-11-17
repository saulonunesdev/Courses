echo "https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/"
echo "Installing Dependencies"
sudo apt-get install libcurl3 openssl

echo "Download the MongoDB .tar.gz tarball"
cd /home/vagrant/
wget https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-ubuntu1404-4.0.2.tgz && tar -zxvf mongodb-linux-*-4.0.2.tgz
rm mongodb-linux-x86_64-ubuntu1404-4.0.2.tgz
#cd mongodb-linux-x86_64-ubuntu1404-4.0.2/

echo "Ensure the binaries are in a directory listed in your PATH environment variable"
sudo echo export MONGO=/home/vagrant/mongodb-linux-x86_64-ubuntu1404-4.0.2/ >> /home/vagrant/.bashrc
source /home/vagrant/.bashrc
sudo echo export PATH=$PATH:/home/vagrant/mongodb-linux-x86_64-ubuntu1404-4.0.2/bin >> /home/vagrant/.bashrc
source /home/vagrant/.bashrc

mkdir mongodb-linux-x86_64-ubuntu1404-4.0.2/data
mkdir mongodb-linux-x86_64-ubuntu1404-4.0.2/data/db

echo "Grant Permissions"
chmod -R 777 /home/vagrant/mongodb-linux-x86_64-ubuntu1404-4.0.2/

#mongod --dbpath=$MONGO/data/db --bind_ip_all 
#mongo --host 127.0.0.1:27017