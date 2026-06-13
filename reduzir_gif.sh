#!/bin/bash
# Script para reduzir GIF do menufut para o WhatsApp
# Limite do WhatsApp: ~1MB

GIF_PATH="/data/data/com.termux/files/home/KaiserBot/dados/midias/menufut.gif"
OUTPUT_PATH="/data/data/com.termux/files/home/KaiserBot/dados/midias/menufut.mp4"

echo "🎬 Reduzindo GIF para MP4..."
echo "📁 Original: $GIF_PATH"
ls -lh "$GIF_PATH"

# Converter GIF para MP4 otimizado
ffmpeg -i "$GIF_PATH" \
  -movflags +faststart \
  -vf "scale=480:-1:flags=lanczos,fps=15" \
  -c:v libx264 \
  -crf 23 \
  -preset fast \
  -c:a aac \
  -b:a 0k \
  -y \
  "$OUTPUT_PATH"

echo ""
echo "✅ Convertido!"
ls -lh "$OUTPUT_PATH"

# Verificar tamanho
SIZE=$(stat -c%s "$OUTPUT_PATH" 2>/dev/null || stat -f%z "$OUTPUT_PATH" 2>/dev/null)
MAX_SIZE=1048576  # 1MB

if [ "$SIZE" -gt "$MAX_SIZE" ]; then
  echo "⚠️ Ainda grande (${SIZE} bytes), reduzindo mais..."
  ffmpeg -i "$GIF_PATH" \
    -movflags +faststart \
    -vf "scale=320:-1:flags=lanczos,fps=10" \
    -c:v libx264 \
    -crf 28 \
    -preset fast \
    -c:a aac \
    -b:a 0k \
    -y \
    "$OUTPUT_PATH"
  echo "✅ Convertido (versão otimizada)!"
  ls -lh "$OUTPUT_PATH"
fi

echo ""
echo "🎉 Pronto! Use !menufut para testar!"