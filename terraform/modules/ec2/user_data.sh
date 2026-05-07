#!/bin/bash

apt update -y

apt install -y docker.io git

systemctl start docker
systemctl enable docker

usermod -aG docker ubuntu