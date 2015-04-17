/**
 * Created by Daniil on 16.04.2015.
 */
describe('Camel game', function () {
    var camelGame = new CamelGame();
    camelGame.canvas = createElement('Canvas');
    camelGame.canvas.width = 600;
    camelGame.canvas.height = 480;
    camelGame.context = camelGame.canvas.getContext('2d');


    describe('Когда совершается плевок', function () {

        if (camelGame.waterProgressBar.getValue() < 10)
            it('Не должен переключиться флаг плевка', function () {
                expect(camelGame.runner.shooting).toBe(false);
            });
        else {
            it('Должен переключиться флаг плевка', function () {
                expect(camelGame.runner.shooting).toBe(true);
            });

            it('Плевок должен быть определен', function () {
                expect(camelGame.runner.spit).toBeDefined();
                expect(camelGame.runner.spit.visible).toBeTruthy();
            });
        }
    });

});
