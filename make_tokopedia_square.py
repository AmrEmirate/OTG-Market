from PIL import Image

# Buat versi square dari tokopedia logo
img = Image.open('./public/9438c3e2.png').convert('RGBA')

# Get bounding box
bbox = img.getbbox()
print(f'Original size: {img.size}')
print(f'Content bbox: {bbox}')

cropped = img.crop(bbox)
w, h = cropped.size
print(f'Cropped size: {w}x{h}')

# Make it square by centering on canvas
size = max(w, h)
square = Image.new('RGBA', (size, size), (0, 0, 0, 0))
x_off = (size - w) // 2
y_off = (size - h) // 2
square.paste(cropped, (x_off, y_off))

# Save
square.save('./public/tokopedia-square.png', 'PNG')
print(f'Saved tokopedia-square.png: {square.size}')
