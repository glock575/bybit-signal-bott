require('dotenv').config();
const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply('🤖 Bybit Signal Bot запущений!');
});

bot.command('status', (ctx) => {
  ctx.reply('✅ Бот працює!');
});

bot.command('help', (ctx) => {
  ctx.reply('📋 Команди:\n/status - статус\n/signals - сигнали');
});

bot.launch();
console.log('✅ Bot launched successfully');
