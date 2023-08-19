#!/bin/bash

# ------ PARAMS -----
# Colors: https://dev.to/ifenna__/adding-colors-to-bash-scripts-48g4
RED="\e[31m"
GREEN="\e[32m"
CYAN="\e[36m"
BOLDCYAN="\e[1;36m"
UNDERLINEGREEN="\e[4;32m"
ENDCOLOR="\e[0m"

MONGODB_VERSION=7.0.0
CONTAINER_NAME=mongodb
EXPOSED_PORT=27017
DATA_DIR=$(pwd)/.dockervolume/data # this is where the volume gets stored.


# ------ SCRIPT -----
printf "🍃 ${BOLDCYAN}Initializing MongoDB in Docker${ENDCOLOR}\n"

if docker inspect "$CONTAINER_NAME" >/dev/null 2>&1; then
    printf "${RED}✘${ENDCOLOR} You already have the container $CONTAINER_NAME running. Script cancelled.\n"
else
    # 1. creates a directory that stores the volume (a place in your filesystem that isn't ephemeral like the Docker container).
    mkdir -p $DATA_DIR
    printf "${GREEN}✔${ENDCOLOR} Created volume data dir ${GREEN}({$DATA_DIR}).${ENDCOLOR}\n"


    # 2. start the container (map to assigned port, set the volume, which parent image to get from)
    docker run -d --name $CONTAINER_NAME -p $EXPOSED_PORT:27017 -v $DATA_DIR:/data/db mongo:$MONGODB_VERSION

    # 3. wait for mongodb to start (arbitrarily)
    for ((i = 1; i <= 4; i++))
    do
      dots=""
      for ((j = 1; j <= i; j++))
      do
        dots+="."
      done
      printf "\r⏳ Starting container%s" "$dots"
      sleep 1
    done
    printf "\r${GREEN}✔${ENDCOLOR} Done Starting!        \n"

    # 4. check the exit status of docker run command
    if [ $? -eq 0 ]; then
      printf "${GREEN}✔ Successfully installed the MongoDB database running on ${ENDCOLOR}${UNDERLINEGREEN}mongodb://localhost:${EXPOSED_PORT}${ENDCOLOR}${GREEN}.${ENDCOLOR}\n"
    else
      printf "${RED}✘ Failed to Create the MongoDB database running on ${EXPOSED_PORT}.${ENDCOLOR}\n"
      printf "- Container with '$CONTAINER_NAME' might already be created before. Do this to check: docker ps -a\n"
      printf "- Port $EXPOSED_PORT might already be taken.\n"
    fi
fi