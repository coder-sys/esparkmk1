#!/bin/bash
echo "Preparing to build."
rm -rf ./web-build 
echo "Installing dependencies."
npm install --force
echo "Building production build into 'web-build' with expo."
npm run build-production
echo "Installing vercel."
npm install vercel --force
echo "Running vercel."
cd web-build
vercel --prod
echo "Operation successful."
cd ..

