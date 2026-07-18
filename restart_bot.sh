#!/bin/bash
echo "🔄 Reiniciando bot..."
git pull origin main
pkill -f "node.*start.js" 2>/dev/null || true
sleep 2
npm start &
echo "✅ Bot reiniciado!"
