import os
import shutil
import time

src_file = '/Users/owner/Library/Application Support/aichat/messages.md'
dest_folder = '/Users/owner/Documents/GitHub/intelligence-record'

last_modification = os.path.getmtime(src_file)

while True:
    if os.path.getmtime(src_file) > last_modification:
        shutil.copy(src_file, dest_folder)
        print("file updated! preview it here https://github.com/MorganBergen/intelligence-record.git")
        last_modification = os.path.getmtime(src_file)
    time.sleep(1)
