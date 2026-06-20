from PIL import Image, ImageDraw
import os

# Open the OTG logo
img = Image.open('./public/logo otg.jpeg').convert('RGBA')

# Create a 64x64 output canvas
size = 64
output = Image.new('RGBA', (size, size), (0, 0, 0, 0))

# Scale the source image to fill 64x64 (center crop)
img_w, img_h = img.size
scale = max(size / img_w, size / img_h)
new_w = int(img_w * scale)
new_h = int(img_h * scale)
img_resized = img.resize((new_w, new_h), Image.LANCZOS)

# Center crop
x_off = (new_w - size) // 2
y_off = (new_h - size) // 2
img_cropped = img_resized.crop((x_off, y_off, x_off + size, y_off + size))

# Create a rounded square mask
mask = Image.new('L', (size, size), 0)
draw = ImageDraw.Draw(mask)
radius = 14
draw.rounded_rectangle([0, 0, size-1, size-1], radius=radius, fill=255)

# Apply mask
output.paste(img_cropped, (0, 0))
output.putalpha(mask)

# Save as PNG
output.save('./public/favicon.png', 'PNG')
print(f'favicon.png created: {size}x{size} pixels with rounded corners')

# Also save as ICO for compatibility
output_32 = output.resize((32, 32), Image.LANCZOS)
output_16 = output.resize((16, 16), Image.LANCZOS)
output_32.save('./public/favicon.ico', format='ICO', sizes=[(32,32), (16,16)])
print('favicon.ico created too')
