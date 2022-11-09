mkdir ~/goinfre/.docker
mkdir ~/goinfre/com.docker.docker
open -a docker
git clone https://github.com/chzabakh/matcha.git ~/goinfre/matcha
sleep 60
code ~/goinfre/matcha/front
code ~/goinfre/matcha/back/server
docker-compose -f ~/goinfre/matcha/front/docker-compose.yml up
