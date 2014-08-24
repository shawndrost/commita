#HipChat Commit Announcer

This is a HipChat extension for keeping up with the progress of your team. When you commit with 'commita', an announcement will be sent with the commit message to the room of your choice.

###INSTALLATION:

After downloading to wherever you would like the files, do the following in the terminal:

`npm install`

```
echo $PATH  # choose one of these directories to put the command in
subl ~/bin/git-commita
```

then paste this, after pointing to the correct file:

```
#!/bin/bash
node PATH/TO/YOUR/FOLDER/app.js "$*"
git commit "$*"
```
Then go into app.js and update the hipchat key to yours

`var HC = new hipchat('YourHipchatKeyHere');`

And the room to the room of your choice

`room: 'YOUR ROOM HERE',`

Rock on!

###USAGE:

`git commita -m "meta, using commita to test commita"`
