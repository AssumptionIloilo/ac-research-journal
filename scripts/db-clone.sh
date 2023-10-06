# Colors
NO_FORMAT="\033[0m"
F_BOLD="\033[1m"
C_GREEN="\033[38;5;40m"

CONTAINER_NAME=mongodb

# load the environment variables.
source .env

printf "${F_BOLD}${C_GREEN}Dumping the Atlas Database...${NO_FORMAT}\n"
docker exec $CONTAINER_NAME mongodump --uri "$MONGODB_URI_REMOTE"
printf "\n${F_BOLD}${C_GREEN}Dropping the Local Database...${NO_FORMAT}\n"
docker exec $CONTAINER_NAME mongosh $MONGODB_URI --eval "db.dropDatabase()"

printf "\n${F_BOLD}${C_GREEN}Restoring the Dump to Local...${NO_FORMAT}\n"
docker exec $CONTAINER_NAME mongorestore --uri="$MONGODB_URI" dump/ac_research_journal

printf "\n${F_BOLD}${C_GREEN}✨ DONE CLONING! ✨${NO_FORMAT}\n"