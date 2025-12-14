#!/bin/bash

# Generates config.js during Vercel build
echo "const TMDB_CONFIG = {
  apiKey: '$TMDB_API_KEY',
  baseUrl: 'https://api.themoviedb.org/3',
  imageBaseUrl: 'https://image.tmdb.org/t/p/w500'
};" > config.js
