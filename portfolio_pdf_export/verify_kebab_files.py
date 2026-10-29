import os

base_dir = 'D:/whateverapp/laragon/www/ParkojiXn/public/portfolio'
for folder in sorted(os.listdir(base_dir)):
    p = os.path.join(base_dir, folder)
    if os.path.isdir(p):
        kebab_files = [f for f in os.listdir(p) if ' ' not in f and '(' not in f and ',' not in f and not f.startswith('.')]
        print(f"{folder}: {len(kebab_files)} clean files")
