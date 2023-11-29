# intelligence-record

###  contents

1.  [intro](#intro)
2.  [script](#script)
3.  [configuration](#configuration)
4.  [remarks](#remarks)
5.  [philosophy on ai](#philosophy-on-ai)

ever since i started using chatgpt i have monitored and stored each conversation i have had with it.  of course everyone has a copy of their data, however this data will be formatted automatically into a markdown file and will always be accessible to the public world. this is a collection of those conversations view them [here](./messages.md)

### `/Users/owner/Library/Application Support/aichat`

```
❯ tree
.
├── config.yaml
├── history.txt
└── messages.md

1 directory, 3 files
```

###  `python3 monitor.py`

the code is quite simple if you have `shutil` installed with pip3 just a continuous while statement and a few calls to copy and pasta the module into the correct `.git` directory.

```python
import os
import shutil
import time

src_file = '/Users/owner/Library/Application Support/aichat/messages.md'
dest_folder = '/Users/owner/Documents/GitHub/intelligence-record'

last_modification = os.path.getmtime(src_file)

while True:
    if os.path.getmtime(src_file) > last_modification:
        shutil.copy(src_file, dest_folder)
        last_modification = os.path.getmtime(src_file)
        print("file updated! preview it here https://github.com/MorganBergen/intelligence-record.git")
    time.sleep(1)
```

###  configuration 

<img src="./prev.png">

thank you for the makers of [aichat](https://github.com/sigoden/aichat) to make this possible
make sure to read [openai api](https://platform.openai.com/docs/api-reference/completions/create#chat) in order to learn more about gpt's capabilities because i know i havent even scratched the surface.  

###  philosophy on ai

or you could say general thoughts about ai

> What they (the public) doesn’t talk about is all of the white collar work that AI is going to do.  My belief is that all repetitive human work that doesn’t require the deep emotional connection between two people; that will all be done in the next couple decades better, cheaper, and faster by AI.

— Sam Altman, OpenAI Co-Chairman

> "It is a profoundly erroneous truism, repeated by all copybooks and by eminent people when they are making speeches, that we should cultivate the habit of thinking of what we are doing. The precise opposite is the case. Civilization advances by extending the number of important operations which we can perform without thinking about them. Operations of thought are like cavalry charges in a battle- they are strictly limited in number, they require fresh horses, and must only be made at decisive moments."

-A. N. Whitehead

