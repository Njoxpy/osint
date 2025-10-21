#!/bin/bash

# OSINT Documentation Management Script

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if virtual environment exists
check_venv() {
    if [ ! -d "venv" ]; then
        print_warning "Virtual environment not found. Creating one..."
        python3 -m venv venv
        print_success "Virtual environment created."
    fi
}

# Install dependencies
install_deps() {
    print_info "Installing dependencies..."
    source venv/bin/activate
    pip install --upgrade pip
    pip install -r requirements.txt
    print_success "Dependencies installed."
}

# Serve documentation locally
serve() {
    check_venv
    source venv/bin/activate
    print_info "Starting MkDocs development server..."
    print_info "Documentation will be available at: http://127.0.0.1:8000"
    print_info "Press Ctrl+C to stop the server."
    mkdocs serve
}

# Build documentation
build() {
    check_venv
    source venv/bin/activate
    print_info "Building documentation..."
    mkdocs build
    print_success "Documentation built in 'site/' directory."
}

# Deploy to GitHub Pages
deploy() {
    check_venv
    source venv/bin/activate
    print_info "Deploying to GitHub Pages..."
    mkdocs gh-deploy
    print_success "Documentation deployed to GitHub Pages."
}

# Setup project (first time)
setup() {
    print_info "Setting up OSINT documentation project..."
    check_venv
    install_deps
    print_success "Project setup completed!"
    print_info "You can now run: $0 serve"
}

# Clean build artifacts
clean() {
    print_info "Cleaning build artifacts..."
    rm -rf site/
    print_success "Build artifacts cleaned."
}

# Show help
show_help() {
    echo "OSINT Documentation Management Script"
    echo ""
    echo "Usage: $0 [command]"
    echo ""
    echo "Commands:"
    echo "  setup     - Initial project setup (install dependencies)"
    echo "  serve     - Start development server"
    echo "  build     - Build static documentation"
    echo "  deploy    - Deploy to GitHub Pages"
    echo "  clean     - Clean build artifacts"
    echo "  install   - Install/update dependencies"
    echo "  help      - Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 setup     # First time setup"
    echo "  $0 serve     # Start local development server"
    echo "  $0 build     # Build for production"
    echo "  $0 deploy    # Deploy to GitHub Pages"
}

# Main command handling
case "${1:-help}" in
    "setup")
        setup
        ;;
    "serve")
        serve
        ;;
    "build")
        build
        ;;
    "deploy")
        deploy
        ;;
    "install")
        install_deps
        ;;
    "clean")
        clean
        ;;
    "help"|*)
        show_help
        ;;
esac
