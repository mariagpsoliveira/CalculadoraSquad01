
const { remote } = require('webdriverio');
const { clicaNumero } = require('../support/utils');
const massaperc = require('../fixtures/massaperc');
massacalc = require("../fixtures/massacalc");

describe('Calculadora', () => {
    
    before(async () => {
        const calculadora = '//android.view.ViewGroup[@resource-id="com.google.android.calculator:id/main_calculator"]'
        const elementoCalculadora = await $(calculadora);
        await elementoCalculadora.waitForDisplayed({ timeout: 15000 });
    });


    it('Calcular a Subtracao', async () => {
        const el1 = await driver.$("accessibility id:5");
        await el1.click();

        const el2 = await driver.$("accessibility id:5");
        await el2.click();

        const el3 = await driver.$("accessibility id:minus");
        await el3.click();

        const el4 = await driver.$("accessibility id:4");
        await el4.click();

        const el5 = await driver.$("accessibility id:3");
        await el5.click();

        const el6 = await driver.$("accessibility id:equals");
        await el6.click();

        const el7 = await driver.$("id:com.google.android.calculator:id/result_final");
        await el7.click();
        expect(await el7.getText()).toEqual('12');
        const clearButton = await driver.$("accessibility id:clear");
        await clearButton.click();

    });

    it('Porcentagem dos numeros', async () => {
        const el1 = await driver.$("accessibility id:1");
        await el1.click();
        const el2 = await driver.$("accessibility id:0");
        await el2.click();
        const el3 = await driver.$("accessibility id:multiply");
        await el3.click();
        const el4 = await driver.$("accessibility id:5");
        await el4.click();
        const el6 = await driver.$("accessibility id:percent");
        await el6.click();
        const el7 = await driver.$("accessibility id:equals");
        await el7.click();
        const el8 = await driver.$("id:com.google.android.calculator:id/result_final");
        await el8.click();
        expect(await el8.getText()).toEqual('0.5');
        const clearButton = await driver.$("accessibility id:clear");
        await clearButton.click();

    }); 

    massacalc.subtracao.forEach(({ numero1, numero2, numero3, numero4, resultadoEsperado }) => {

        it('subtracao', async () => {

            await clicaNumero(numero1)
            await clicaNumero(numero2)

            subtracao = 'accessibility id:minus';
            await $(subtracao).click()

            await clicaNumero(numero3)
            await clicaNumero(numero4)

            const equals = 'accessibility id:equals';
            await $(equals).click();

            const resultadoFinal = await $("id:com.google.android.calculator:id/result_final");
            expect(await resultadoFinal.getText()).toEqual(resultadoEsperado);
            const clearButton = await driver.$("accessibility id:clear");
            await clearButton.click();

        });
    });

    massaperc.percentagem.forEach(({ numero1, numero2, numero3, resultadoEsperado }) => {

      it('percentagem', async () => {

             await clicaNumero(numero1)
             await clicaNumero(numero2)

             multiplica = 'accessibility id:multiply';
             await $(multiplica).click()

             await clicaNumero(numero3)
        
             const percentagemBtn = 'accessibility id:percent';
             await $(percentagemBtn).click();

             const equals = 'accessibility id:equals';
             await $(equals).click();

            const resultadoFinal = await $("id:com.google.android.calculator:id/result_final");
             expect(await resultadoFinal.getText()).toEqual(resultadoEsperado);
             const clearButton = await driver.$("accessibility id:clear");
            await clearButton.click();

         });
     });
});