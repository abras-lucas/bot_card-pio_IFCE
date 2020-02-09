const env = require('../.env')
const Telegraf = require('telegraf')
const moment = require('moment')
const bot = new Telegraf(env.token)

bot.start(ctx => {
    ctx.reply('Olá, bem-vind@ ao cardápio do IFCE-Campus Jaguaribe!'
    + '\nEsse bot funciona da seguinte forma:'
    + '\n--> Digite /semana para saber o cardápio da semana'
    + '\n--> Digite o dia da semana para saber o cardápio previsto para todos os turnos do dia digitado.'
    + ' Exemplo: segunda'
    + '\n--> Digite o dia da semana acompanhado do turno, para saber a refeição daquele turno específico.'
    + ' Exemplo: segunda manhã')
})

bot.hears(/segunda manhã/i, ctx => {
    ctx.reply('Na segunda-feira, pela manhã, teremos:'
    + '\nMacarronada com suco')
})

bot.hears(/segunda tarde/i, ctx => {
    ctx.reply('Na segunda-feira, pela tarde, teremos:'
    + '\nMacarronada com suco')
})

bot.hears(/segunda noite/i, ctx => {
    ctx.reply('Na segunda-feira, pela noite, teremos:'
    + '\nPaçoca')
})

bot.hears(/segunda/i, ctx => {
    ctx.reply('Na segunda-feira teremos:'
    + '\nManhã: Macarronada com suco'
    + '\nTarde: Macarronada com suco'
    + '\nNoite: Paçoca')
})

bot.hears(/terça manhã/i, ctx => {
    ctx.reply('Na terça-feira, pela manhã, teremos:'
    + '\nSopa e pão')
})

bot.hears(/terça tarde/i, ctx => {
    ctx.reply('Na terça-feira, pela tarde, teremos:'
    + '\nSopa e pão')
})

bot.hears(/terça noite/i, ctx => {
    ctx.reply('Na terça-feira, pela noite, teremos:'
    + '\nSopa e pão')
})

bot.hears(/terça/i, ctx => {
    ctx.reply('Na terça-feira teremos:'
    + '\nManhã: Sopa e pão'
    + '\nTarde: Sopa e pão'
    + '\nNoite: Sopa e pão')
})

bot.hears(/quarta manhã/i, ctx => {
    ctx.reply('Na quarta-feira, pela manhã, teremos:'
    + '\nBolacha e suco')
})

bot.hears(/quarta tarde/i, ctx => {
    ctx.reply('Na quarta-feira, pela tarde, teremos:'
    + '\nBolacha e suco')
})

bot.hears(/quarta noite/i, ctx => {
    ctx.reply('Na quarta-feira, pela noite, teremos:'
    + '\nArroz e paçoca')
})

bot.hears(/quarta/i, ctx => {
    ctx.reply('Na quarta-feira teremos:'
    + '\nManhã: Bolacha e suco'
    + '\nTarde: Bolacha e suco'
    + '\nNoite: Arroz e paçoca')
})

bot.hears(/quinta manhã/i, ctx => {
    ctx.reply('Na quinta-feira, pela manhã, teremos:'
    + '\nVitamina e maçã')
})

bot.hears(/quinta tarde/i, ctx => {
    ctx.reply('Na quinta-feira, pela tarde, teremos:'
    + '\nVitamina e maçã')
})

bot.hears(/quinta noite/i, ctx => {
    ctx.reply('Na quinta-feira, pela noite, teremos:'
    + '\nArroz, macarrão e salada')
})

bot.hears(/quinta/i, ctx => {
    ctx.reply('Na quinta-feira teremos:'
    + '\nManhã: Vitamina e maçã'
    + '\nTarde: Vitamina e maçã'
    + '\nNoite: Arroz, macarrão e salada')
})

bot.hears(/sexta manhã/i, ctx => {
    ctx.reply('Na sexta-feira, pela manhã, teremos:'
    + '\nBaião com frango')
})

bot.hears(/sexta tarde/i, ctx => {
    ctx.reply('Na sexta-feira, pela tarde, teremos:'
    + '\nBolacha com suco')
})

bot.hears(/sexta noite/i, ctx => {
    ctx.reply('Na sexta-feira, pela noite, teremos:'
    + '\nMacarronada')
})

bot.hears(/sexta/i, ctx => {
    ctx.reply('Na sexta-feira teremos:'
    + '\nManhã: Baião com frango'
    + '\nTarde: Bolacha com suco'
    + '\nNoite: Macarronada')
})

bot.command('semana', ctx => ctx.replyWithHTML('O cardápio da semana é:'
    + '\n--> <b>Segunda-feira:</b>'
    + '\nManhã: Macarronada com suco'
    + '\nTarde: Macarronada com suco'
    + '\nNoite: Paçoca\n'
    + '\n--> <b>Terça-feira:</b>'
    + '\nManhã: Sopa e pão'
    + '\nTarde: Sopa e pão'
    + '\nNoite: Sopa e pão\n'
    + '\n--> <b>Quarta-feira:</b>'
    + '\nManhã: Bolacha e suco'
    + '\nTarde: Bolacha e suco'
    + '\nNoite: Arroz e paçoca\n'
    + '\n--> <b>Quinta-feira:</b>'
    + '\nManhã: Vitamina e maçã'
    + '\nTarde: Vitamina e maçã'
    + '\nNoite: Arroz, macarrão e salada\n'
    + '\n--> <b>Sexta-feira:</b>'
    + '\nManhã: Baião com frango'
    + '\nTarde: Bolacha com suco'
    + '\nNoite: Macarronada\n')
)

bot.startPolling()