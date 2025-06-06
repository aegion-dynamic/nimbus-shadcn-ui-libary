#!/bin/bash

# Clean up existing build
echo "Cleaning up previous build..."
rm -rf dist

# Build TypeScript declarations
echo "Building TypeScript declarations..."
tsc --emitDeclarationOnly

# Build the library with Vite
echo "Building library with Vite..."
vite build

# Move the new vite.config in place
echo "Updating vite.config.ts..."
mv vite.config.ts.new vite.config.ts

# Test the build contents
echo "Checking build output..."
ls -la dist
