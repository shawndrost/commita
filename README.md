usage:

`npm install`

terminal:

```
echo $PATH  # choose one of these directories to put the command in
subl ~/bin/git-commitasubl
```

then paste this:

```
#!/bin/bash
node ~/code/hackreactor/commit-announcer/app.js
```

then do this:

`git commita -m "meta, using commita to test commita"`
