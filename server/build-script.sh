#!/bin/sh
# project script

echo "Build project Software with NestJS server..."
log_user_in_digitalocean() {
    # Switch to project context
    doctl auth switch --context personal-projects
    doctl auth init --context personal-projects
    docker login registry.digitalocean.com
}

sleep 2
build_image() {
  local env=$1
  echo "Building docker image..."
  docker build -t "clique-$env" .
}

tag_image() {
  local env=$1
  sleep 2
  echo "Tagging docker image..."
  docker tag "clique-$env" "registry.digitalocean.com/software-images/clique-$env"
}

push_image() {
  local env=$1
  sleep 2
  echo "Pushing docker image..."
  docker push "registry.digitalocean.com/software-images/clique-$env"
}

echo "-------------------------------------\n"
echo "Please select environment:"
echo "1: Dev"
echo "2: Staging"
echo "3: Prod"
read choice
echo "-------------------------------------\n"

# Set environment based on choice
case $choice in
  1) environment="dev" ;;
  2) environment="staging" ;;
  3) environment="prod" ;;
  *) echo "Invalid choice. Please enter 1 (for dev), 2 (for stag), or 3 (for prod)."
  exit 1 ;;
esac

# Proceed with Docker operations
echo "Environment is $environment. \n"
log_user_in_digitalocean
echo "Logging into DigitalOcean...\n"
echo "Proceeding with Docker operations...\n"
build_image $environment
tag_image $environment
push_image $environment