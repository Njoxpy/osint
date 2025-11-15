#!/bin/bash

domain=$1
# if [! -d "$domain"];then
#     mkdir $domain
# fi


if [ ! -d "$domain" ];then
    mkdir $domain
fi
