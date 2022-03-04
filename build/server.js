"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jimp_1 = __importDefault(require("jimp"));
const wrap_text_1 = __importDefault(require("wrap-text"));
const moment_1 = __importDefault(require("moment"));
const PORT = process.env.PORT || 8000;
const app = (0, express_1.default)();
app.get('/api', async (req, res) => {
    const CHARACTERS_PER_LINE = 15;
    const FONT_SIZE = 32;
    const text = (0, wrap_text_1.default)(req.query.text, CHARACTERS_PER_LINE);
    const lines = text.split('\n');
    const height = FONT_SIZE * lines.length;
    const width = FONT_SIZE * CHARACTERS_PER_LINE;
    const image = await new jimp_1.default(width, height, 0x0 /*transparent*/);
    const font = await jimp_1.default.loadFont(jimp_1.default.FONT_SANS_32_BLACK);
    const outputPath = __dirname +
        '../assets/static' +
        text +
        '_' +
        (0, moment_1.default)().format('YYYY-MM-DD_HH:mm:ss') +
        '.png';
    for (let i = 0; i < lines.length; i++) {
        const y = i * FONT_SIZE;
        await image.print(font, 0, y, lines[i]);
    }
    image
        .color([{ apply: 'xor', params: [req.query.fontColor] }])
        .write(outputPath, () => res.status(200).sendFile(outputPath));
});
app.listen(PORT, () => {
    console.log(`Server is listening at localhost:${PORT}`);
});
