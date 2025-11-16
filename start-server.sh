#!/bin/bash

# MkDocs Server Startup Script
# Quick script to start the MkDocs development server

set -e

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}Starting MkDocs server...${NC}"

# Check if virtual environment exists
if [ ! -d "venv" ]; then
    echo "Virtual environment not found. Please run './manage.sh setup' first."
    exit 1
fi

# Activate virtual environment and start server
source venv/bin/activate

echo -e "${GREEN}MkDocs server starting...${NC}"
echo -e "${BLUE}Documentation will be available at: http://127.0.0.1:8000/osint/${NC}"
echo -e "${BLUE}Press Ctrl+C to stop the server.${NC}"
echo ""

# Start MkDocs server
mkdocs serve
