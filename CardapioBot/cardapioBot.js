const env = require('../.env')
const Telegraf = require('telegraf')
const moment = require('moment')
const bot = new Telegraf(env.token)

var segunda = {
    manha : "Macarronada com suco",
    tarde : "Macarronada com suco",
    noite : "Paçoca"
}

var terca = {
    manha : "Sopa e pão",
    tarde : "Sopa e pão",
    noite : "Sopa e pão"
}

var quarta = {
    manha : "Bolacha e suco",
    tarde : "Bolacha e suco",
    noite : "Arroz e paçoca"
}

var quinta = {
    manha : "Vitamina e maçã",
    tarde : "Vitamina e maçã",
    noite : "Arroz, macarrão e salada"
}

var sexta = {
    manha : "Baião com frango",
    tarde : "Bolacha com suco",
    noite : "Macarronada"
}

bot.start(ctx => {
    ctx.reply('Olá, bem-vind@ ao cardápio do IFCE-Campus Jaguaribe!'
    + '\nEsse bot funciona da seguinte forma:'
    + '\n--> Lista de comandos (basta clicar):'
    + '\n--> /semana - Exibe o cardápio da semana'
    + '\n--> /segunda - Exibe o cardápio da segunda'
    + '\n--> /terca - Exibe o cardápio da terça'
    + '\n--> /quarta - Exibe o cardápio da quarta'
    + '\n--> /quinta - Exibe o cardápio da quinta'
    + '\n--> /sexta - Exibe o cardápio da sexta'
    + '\n--> Digite o dia da semana para saber o cardápio previsto para todos os turnos do dia digitado.'
    + ' Exemplo: segunda'
    + '\n--> Digite o dia da semana acompanhado do turno, para saber a refeição daquele turno específico.'
    + ' Exemplo: segunda manhã'
    + '\n--> Para exibir essa mensagem novamente, digite /start')
})

bot.hears(/segunda manhã/i, ctx => {
    ctx.reply('Na segunda-feira, pela manhã, teremos:'
    + `\nManhã: ${segunda.manha}`)
})

bot.hears(/segunda tarde/i, ctx => {
    ctx.reply('Na segunda-feira, pela tarde, teremos:'
    + `\nTarde: ${segunda.tarde}`)
})

bot.hears(/segunda noite/i, ctx => {
    ctx.reply('Na segunda-feira, pela noite, teremos:'
    + `\nNoite: ${segunda.noite}`)
})

bot.hears(/segunda/i, ctx => {
    ctx.reply('Na segunda-feira teremos:'
    + `\nManhã: ${segunda.manha}`
    + `\nTarde: ${segunda.tarde}`
    + `\nNoite: ${segunda.noite}`)
})

bot.hears(/terça manhã/i, ctx => {
    ctx.reply('Na terça-feira, pela manhã, teremos:'
    + `\nManhã: ${terca.manha}`)
})

bot.hears(/terça tarde/i, ctx => {
    ctx.reply('Na terça-feira, pela tarde, teremos:'
    + `\nTarde: ${terca.tarde}`)
})

bot.hears(/terça noite/i, ctx => {
    ctx.reply('Na terça-feira, pela noite, teremos:'
    + `\nNoite: ${terca.noite}`)
})

bot.hears(/terça/i, ctx => {
    ctx.reply('Na terça-feira teremos:'
    + `\nManhã: ${terca.manha}`
    + `\nTarde: ${terca.tarde}`
    + `\nNOite: ${terca.noite}`)
})

bot.hears(/quarta manhã/i, ctx => {
    ctx.reply('Na quarta-feira, pela manhã, teremos:'
    + `\nManhã: ${quarta.manha}`)
})

bot.hears(/quarta tarde/i, ctx => {
    ctx.reply('Na quarta-feira, pela tarde, teremos:'
    + `\nTarde: ${quarta.tarde}`)
})

bot.hears(/quarta noite/i, ctx => {
    ctx.reply('Na quarta-feira, pela noite, teremos:'
    + `\nNoite: ${quarta.noite}`)
})

bot.hears(/quarta/i, ctx => {
    ctx.reply('Na quarta-feira teremos:'
    + `\nManhã: ${quarta.manha}`
    + `\nTarde: ${quarta.tarde}`
    + `\nNoite: ${quarta.noite}`)
})

bot.hears(/quinta manhã/i, ctx => {
    ctx.reply('Na quinta-feira, pela manhã, teremos:'
    + `\nManhã: ${quinta.manha}`)
})

bot.hears(/quinta tarde/i, ctx => {
    ctx.reply('Na quinta-feira, pela tarde, teremos:'
    + `\nTarde: ${quinta.tarde}`)
})

bot.hears(/quinta noite/i, ctx => {
    ctx.reply('Na quinta-feira, pela noite, teremos:'
    + `\nNoite: ${quinta.noite}`)
})

bot.hears(/quinta/i, ctx => {
    ctx.reply('Na quinta-feira teremos:'
    + `\nManhã: ${quinta.manha}`
    + `\nTarde: ${quinta.tarde}`
    + `\nNoite: ${quinta.noite}`)
})

bot.hears(/sexta manhã/i, ctx => {
    ctx.reply('Na sexta-feira, pela manhã, teremos:'
    + `\nManhã: ${sexta.manha}`)
})

bot.hears(/sexta tarde/i, ctx => {
    ctx.reply('Na sexta-feira, pela tarde, teremos:'
    + `\nTarde: ${sexta.tarde}`)
})

bot.hears(/sexta noite/i, ctx => {
    ctx.reply('Na sexta-feira, pela noite, teremos:'
    + `\nNoite: ${sexta.noite}`)
})

bot.hears(/sexta/i, ctx => {
    ctx.reply('Na sexta-feira teremos:'
    + `\nManhã: ${sexta.manha}`
    + `\nTarde: ${sexta.tarde}`
    + `\nNoite: ${sexta.noite}`)
})

bot.command('semana', ctx => ctx.replyWithHTML('O cardápio da semana é:'
    + '\n--> <b>Segunda-feira:</b>'
    + `\nManhã: ${segunda.manha}`
    + `\nTarde: ${segunda.tarde}`
    + `\nNoite: ${segunda.noite}\n`
    + '\n--> <b>Terça-feira:</b>'
    + `\nManhã: ${terca.manha}`
    + `\nTarde: ${terca.tarde}`
    + `\nNOite: ${terca.noite}\n`
    + '\n--> <b>Quarta-feira:</b>'
    + `\nManhã: ${quarta.manha}`
    + `\nTarde: ${quarta.tarde}`
    + `\nNoite: ${quarta.noite}\n`
    + '\n--> <b>Quinta-feira:</b>'
    + `\nManhã: ${quinta.manha}`
    + `\nTarde: ${quinta.tarde}`
    + `\nNoite: ${quinta.noite}\n`
    + '\n--> <b>Sexta-feira:</b>'
    + `\nManhã: ${sexta.manha}`
    + `\nTarde: ${sexta.tarde}`
    + `\nNoite: ${sexta.noite}\n`)
)

bot.command('segunda', ctx => {
    ctx.reply('Na segunda-feira teremos:'
    + `\nManhã: ${segunda.manha}`
    + `\nTarde: ${segunda.tarde}`
    + `\nNoite: ${segunda.noite}`)
})

bot.command('terca', ctx => {
    ctx.reply('Na terça-feira teremos:'
    + `\nManhã: ${terca.manha}`
    + `\nTarde: ${terca.tarde}`
    + `\nNoite: ${terca.noite}`)
})

bot.command('quarta', ctx => {
    ctx.reply('Na quarta-feira teremos:'
    + `\nManhã: ${quarta.manha}`
    + `\nTarde: ${quarta.tarde}`
    + `\nNoite: ${quarta.noite}`)
})

bot.command('quinta', ctx => {
    ctx.reply('Na quinta-feira teremos:'
    + `\nManhã: ${quinta.manha}`
    + `\nTarde: ${quinta.tarde}`
    + `\nNoite: ${quinta.noite}`)
})

bot.command('sexta', ctx => {
    ctx.reply('Na sexta-feira teremos:'
    + `\nManhã: ${sexta.manha}`
    + `\nTarde: ${sexta.tarde}`
    + `\nNoite: ${sexta.noite}`)
})

bot.startPolling()