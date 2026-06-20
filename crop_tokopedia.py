from PIL import Image
import os

# =============================================
# Crop Tokopedia logo to remove whitespace
# =============================================
img = Image.open('./public/9438c3e2.png').convert('RGBA')

# Get bounding box of non-transparent content
bbox = img.getbbox()
print(f'Original size: {img.size}')
print(f'Content bbox: {bbox}')

if bbox:
    # Crop to content
    cropped = img.crop(bbox)
    print(f'Cropped size: {cropped.size}')
    
    # Add small padding (5% each side)
    pad = int(max(cropped.width, cropped.height) * 0.05)
    new_size = (cropped.width + 2*pad, cropped.height + 2*pad)
    final = Image.new('RGBA', new_size, (0, 0, 0, 0))
    final.paste(cropped, (pad, pad))
    
    # Save as cropped version
    final.save('./public/tokopedia-cropped.png', 'PNG')
    print(f'Saved tokopedia-cropped.png: {final.size}')
