# Ghost Pepper Bot
Ghost Pepper is a general purpose Discord bot. The way it is currently setup, it will run on your own system and will use your own system resources.

## Instalation Instructions
1. Run `GP-Installer.exe` and follow any prompts
1. Open the folder where you installed the bot and hold SHIFT and right-click in the empty space of the folder and select "Open PowerShell window here".
1. Type `npm --version` and press enter.

    If you get an error, go to nodejs.org and install node. Otherwise continue with the folowing steps.

1. Go to discord.com/developers and sign in with an existing Discord account.
1. Under applications, select "New Application". Title it Ghost Pepper Discord Bot.
1. On the left hand side, select "bot", then "Add Bot" and "Yes, do it!".
1. Click on the discord logo and locate the bots folder and select _avatar.png_.
1. Click "Copy" and then open the file titled token.json in your choise of text editor.
1. You'll see the folowing code. Replace `your-token-here` with your token you copied from the Discord website.
```
{
    "token": "your-token-here"
}
```
1. Save the file then close the PowerShell window and navigate to the install folder.
1. Find the file titled START-BOT.bat and double click it.

    The bot is now running. You can start the bot at any time in the same way. To stop the bot, select the window and do CTRL + C.

1. Return to the Discord website and select "OAuth2" on the left hand side.
1. Select "bot" then in the new box that appears, select "Administrator".
1. Select copy and paste the URL into your web browser.
1. Accept the prompts and select the server you wish to invite the bot to.

    The bot has now been added to your server. 

    To remove, simply right click the bot on the left hand side and select "Kick".


## Settings
### Any settings that can be changed will be under config.json.

- Prefix

    The prefix that will be used before any and all commands.
- Version
    
    The current version of the bot (Not to be changed!)
- modRole

    The exact name of your moderators role.

-  memberRole

    The exact name of the role that all of your members will have

- mutedRole

    The role that will be given to a member when they are muted. Make sure to give no permissions except `Read Text Channels & See Voice Channels`.
    
### The following settings are located under autoMod.json

- autoMod

    Toggles if the AutoMod is on. This will overwrite any other AutoMod toggles. Can hold either a `1` or a `0`.

- bannedWords
    
    Toggles if the AutoMod will sort out messages containing words listed under `bannedWordsList`. Can hold either a `1` or a `0`.

- bannedWordsList

    List of words that will be sorted out. Format like:
    ```
    "bannedWordsList": ["yellow", "habenaros"]
    ```

## List of Commands
- Version

    Usage: version

    Aliases: ver

- Kick

    Usage: kick {user} [reason]

    Aliases: k

- Ban

    Usage: ban {user} [reason]

    Aliases: b

- Mute

    Usage: mute {user} {time [s, m, h, d,]}

    Time: s = Seconds, m = Minutes, h = Hours, d = Days.