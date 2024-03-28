#!/bin/bash

# Define the sizes for the icons
#512 means 512x512 an so on
sizes=(512 192 48 24)

# Create the icons
for size in ${sizes[@]}; do
    convert "$(pwd)/aIcon.png" -resize ${size}x${size} "$(pwd)/../src/assetspwa/${size}x${size}.png"
done
