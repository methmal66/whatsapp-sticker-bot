# Whatsapp Sticker Bot ![version](https://img.shields.io/github/v/release/methmal66/whatsapp-sticker-bot)
![open issue](https://img.shields.io/github/issues-raw/methmal66/whatsapp-sticker-bot)
![stars](https://img.shields.io/github/stars/methmal66/whatsapp-sticker-bot?style=plastic)

Simple typescript template with jest babel and eslintAPI to automate the process of generating whatsapp stickers. It helps to get rid of sticker apps which shows annoying ads.

## How to use
Host it your self in a free linode server or use this [demo](http://sticker.whatsapp.bot.sanujamethmal.com)

### Example usage of the above demo
`http://sticker.whatsapp.bot.sanujamethmal.com?text=Hello+World&fontColor=red`
## Inputs
- Text - query param 'text'. The string you want to get a sticker of
- Font coloer - query param 'fontColor'. Any valid color name (red, green, blue...)

## Output
Display a png file

## Core Functionalities
- Ability to change only two parameters, text and its color
- Automatically wraps the given text
- Image has static width and dynamic height
- png file must be downloaded mannually
