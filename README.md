# Whatsapp Sticker Bot ![version](https://img.shields.io/github/v/release/methmal66/whatsapp-sticker-bot)
![stars](https://img.shields.io/github/stars/methmal66/whatsapp-sticker-bot?color=yellow)
![forks](https://img.shields.io/github/forks/methmal66/whatsapp-sticker-bot)
![open issue](https://img.shields.io/github/issues-raw/methmal66/whatsapp-sticker-bot?color=green)
![open pr](https://img.shields.io/github/issues-pr-raw/methmal66/whatsapp-sticker-bot?color=purple)

API to automate the process of generating whatsapp stickers. It helps to get rid of sticker apps which shows annoying ads.

## How to use
Host it your self in a free linode server or use this [demo](http://sticker.whatsapp.bot.sanujamethmal.com)

### Self Host
`docker run -p 80:8000 -d methmal66/whatsapp-sticker-bot`
### Example usage of the above demo
`http://sticker.whatsapp.bot.sanujamethmal.com?text=Hello+World&fontColor=red`
## Inputs
- Text - query param 'text'. The string you want to get a sticker of
- Font coloer - query param 'fontColor'. Any valid color name (red, green, blue...)

## Output
Receive a png file

## Core Functionalities
- Ability to change only two parameters, text and its color
- Automatically wraps the given text
- Image has static width and dynamic height
- png file download automatically
