const {Telegraf, Markup} = require('telegraf');

const Black  = require('./JOKES/black');
const SHT = require('./JOKES/shtirli');
const Short = require('./JOKES/short');
const Prog = require('./JOKES/coding');
const TUP = require('./JOKES/tupo');
const VOV = require('./JOKES/vova');

const bot = new Telegraf('6111673924:AAHVBIMtUAHnH12WGFK7rzCtbStKq2ozMQg');

const keyboard = Markup.keyboard([
    ['Информация'],
    ['Про Штирлица','Про Нурика'],
    ['Короткие','Про программистов'],
    ['Тупо и глупо','Про Вовочку']     
]).resize().oneTime();
 
async function startBot() {

    const jokes = await Black();  
    const sht = await SHT();
    const shot = await Short();
    const code = await Prog();
    const tup = await TUP();
    const vov = await VOV();

    let jok = jokes[0];
    
    bot.start((ctx)=>{
        ctx.reply('Привет! Я бот шутник. Вот что я могу: \n /bjoke - шутки про Нурика \n /hjoke - шутки про Штирлица \n /sjoke - короткие шутки \n /pjoke - про Программистов \n /tjoke - тупые шутки \n /vjoke - про Вовочку \n /joke - шутка', keyboard);
    });


    bot.command('bjoke',(ctx)=>{
        const rand = Math.floor(Math.random()*jokes.length);
        jok= jokes[rand]
        
        if(jok == 'Рейтинг смешных коротких Анекдотов. Веселые Шутки, Короткие анекдоты и Приколы. Если вы не хотите читать длинные и не всегда понятные анекдоты, то наш рейтинг специально для вас! Не забывайте проголосовать на самые смешные Анекдоты.'){
            const rand = Math.floor(Math.random()*jokes.length);
            jok= jokes[rand]
        }else{
            ctx.reply(jok);
        }
    })

    bot.command('hjoke',(ctx)=>{
        const rand = Math.floor(Math.random()*sht.length);
        jok= sht[rand]
        if(jok == 'Рейтинг смешных коротких Анекдотов. Веселые Шутки, Короткие анекдоты и Приколы. Если вы не хотите читать длинные и не всегда понятные анекдоты, то наш рейтинг специально для вас! Не забывайте проголосовать на самые смешные Анекдоты.'){
            const rand = Math.floor(Math.random()*sht.length);
            jok= sht[rand]
        }else{
            ctx.reply(jok);
        }
         
    })

    bot.command('sjoke',(ctx)=>{
        const rand = Math.floor(Math.random()*shot.length);
        jok= shot[rand]
        if(jok == 'Рейтинг смешных коротких Анекдотов. Веселые Шутки, Короткие анекдоты и Приколы. Если вы не хотите читать длинные и не всегда понятные анекдоты, то наш рейтинг специально для вас! Не забывайте проголосовать на самые смешные Анекдоты.'){
            const rand = Math.floor(Math.random()*shot.length);
            jok= shot[rand]
        }else{
            ctx.reply(jok);
        }
         
    })

    bot.command('pjoke',(ctx)=>{
        const rand = Math.floor(Math.random()*code.length);
        jok= code[rand]
         
        if(jok == 'Рейтинг смешных коротких Анекдотов. Веселые Шутки, Короткие анекдоты и Приколы. Если вы не хотите читать длинные и не всегда понятные анекдоты, то наш рейтинг специально для вас! Не забывайте проголосовать на самые смешные Анекдоты.'){
            const rand = Math.floor(Math.random()*code.length);
            jok= code[rand]
        }else{
            ctx.reply(jok);
        }
    })

    bot.command('tjoke',(ctx)=>{
        const rand = Math.floor(Math.random()*tup.length);
        jok= tup[rand]
        if(jok == 'Рейтинг смешных коротких Анекдотов. Веселые Шутки, Короткие анекдоты и Приколы. Если вы не хотите читать длинные и не всегда понятные анекдоты, то наш рейтинг специально для вас! Не забывайте проголосовать на самые смешные Анекдоты.'){
            const rand = Math.floor(Math.random()*tup.length);
            jok= tup[rand]
        }else{
            ctx.reply(jok);
        }
    })

    bot.command('vjoke',(ctx)=>{
        const rand = Math.floor(Math.random()*vov.length);
        jok= vov[rand]
        if(jok == 'Рейтинг смешных коротких Анекдотов. Веселые Шутки, Короткие анекдоты и Приколы. Если вы не хотите читать длинные и не всегда понятные анекдоты, то наш рейтинг специально для вас! Не забывайте проголосовать на самые смешные Анекдоты.'){
            const rand = Math.floor(Math.random()*vov.length);
            jok= vov[rand]
        }else{
            ctx.reply(jok);
        }
         
    })

    bot.command('info',(ctx)=>{
        ctx.reply('Список команд: \n /info - список команд \n /bjoke - шутки про Нурика \n /hjoke - шутки про Штирлица \n /sjoke - короткие шутки \n /pjoke - про Программистов \n /tjoke - тупые шутки \n /vjoke - про Вовочку \n /joke - шутка')
    })

    bot.command('joke',(ctx)=>{
        const randomIndex = Math.floor(Math.random() * 6);

        let rnd;

        if (randomIndex === 0) {
        rnd = jokes;
        } else if (randomIndex === 1) {
        rnd = sht;
        } else if (randomIndex === 2) {
        rnd = shot;
        } else if (randomIndex === 3) {
        rnd = code;
        } else if (randomIndex === 4) {
        rnd = tup;
        } else {
        rnd = vov;
        }
        const rand = Math.floor(Math.random()*rnd.length);
        jok= rnd[rand]
        if(jok == 'Рейтинг смешных коротких Анекдотов. Веселые Шутки, Короткие анекдоты и Приколы. Если вы не хотите читать длинные и не всегда понятные анекдоты, то наш рейтинг специально для вас! Не забывайте проголосовать на самые смешные Анекдоты.'){
            const rand = Math.floor(Math.random()*rnd.length);
            jok= rnd[rand]
        }else{
            ctx.reply(jok);
        }
        
    })
///////////////////////////////////
    bot.hears('Информация',(ctx)=>{
        ctx.reply('Вот что я могу: \n /info - список команд \n /bjoke - шутки про Нурика \n /hjoke - шутки про Штирлица \n /sjoke - короткие шутки \n /pjoke - про Программистов \n /tjoke - тупые шутки \n /vjoke - про Вовочку \n /joke - шутка')
    })

  
    bot.hears('Про Нурика',(ctx)=>{
        const rand = Math.floor(Math.random()*jokes.length);
        jok= jokes[rand]
        if(jok == 'Рейтинг смешных коротких Анекдотов. Веселые Шутки, Короткие анекдоты и Приколы. Если вы не хотите читать длинные и не всегда понятные анекдоты, то наш рейтинг специально для вас! Не забывайте проголосовать на самые смешные Анекдоты.'){
            const rand = Math.floor(Math.random()*jokes.length);
            jok= jokes[rand]
        }else{
            ctx.reply(jok);
        }
        
    });

    bot.hears('Про Штирлица',(ctx)=>{
        const rand = Math.floor(Math.random()*sht.length);
        jok= sht[rand]
         
        if(jok == 'Рейтинг смешных коротких Анекдотов. Веселые Шутки, Короткие анекдоты и Приколы. Если вы не хотите читать длинные и не всегда понятные анекдоты, то наш рейтинг специально для вас! Не забывайте проголосовать на самые смешные Анекдоты.'){
            const rand = Math.floor(Math.random()*sht.length);
            jok= sht[rand]
        }else{
            ctx.reply(jok);
        }
    });

    bot.hears('Короткие',(ctx)=>{
        const rand = Math.floor(Math.random()*shot.length);
        jok= shot[rand]
        
        if(jok == 'Рейтинг смешных коротких Анекдотов. Веселые Шутки, Короткие анекдоты и Приколы. Если вы не хотите читать длинные и не всегда понятные анекдоты, то наш рейтинг специально для вас! Не забывайте проголосовать на самые смешные Анекдоты.'){
            const rand = Math.floor(Math.random()*shot.length);
            jok= shot[rand]
        }else{
            ctx.reply(jok);
        }
    });

    bot.hears('Про программистов',(ctx)=>{
        const rand = Math.floor(Math.random()*code.length);
        jok= code[rand]
         
        if(jok == 'Рейтинг смешных коротких Анекдотов. Веселые Шутки, Короткие анекдоты и Приколы. Если вы не хотите читать длинные и не всегда понятные анекдоты, то наш рейтинг специально для вас! Не забывайте проголосовать на самые смешные Анекдоты.'){
            const rand = Math.floor(Math.random()*rand.length);
            jok= rand[rand]
        }else{
            ctx.reply(jok);
        }
    });

    bot.hears('Тупо и глупо',(ctx)=>{
        const rand = Math.floor(Math.random()*tup.length);
        jok= tup[rand]
        
        if(jok == 'Рейтинг смешных коротких Анекдотов. Веселые Шутки, Короткие анекдоты и Приколы. Если вы не хотите читать длинные и не всегда понятные анекдоты, то наш рейтинг специально для вас! Не забывайте проголосовать на самые смешные Анекдоты.'){
            const rand = Math.floor(Math.random()*tup.length);
            jok= tup[rand]
        }else{
            ctx.reply(jok);
        }
    });

    bot.hears('Про Вовочку',(ctx)=>{
        const rand = Math.floor(Math.random()*vov.length);
        jok= vov[rand]
         
        if(jok == 'Рейтинг смешных коротких Анекдотов. Веселые Шутки, Короткие анекдоты и Приколы. Если вы не хотите читать длинные и не всегда понятные анекдоты, то наш рейтинг специально для вас! Не забывайте проголосовать на самые смешные Анекдоты.'){
            const rand = Math.floor(Math.random()*vov.length);
            jok= vov[rand]
        }else{
            ctx.reply(jok);
        }
    });

    bot.launch();
}
  
startBot();