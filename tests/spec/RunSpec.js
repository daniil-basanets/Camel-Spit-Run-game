/**
 * Created by Daniil on 17.04.2015.
 */
describe('Camel game', function () {
    var camelGame = new CamelGame();
    camelGame.canvas = createElement('Canvas');
    camelGame.canvas.width = 600;
    camelGame.canvas.height = 480;
    camelGame.context = camelGame.canvas.getContext('2d');

    describe('Когда верблюд начинает бежать', function () {
        camelGame.turnRight();

        it('Должна установиться скрость фона', function () {
            expect(camelGame.bgVelocity).toBe(camelGame.BACKGROUND_VELOCITY);
        });

        it('Должна быть задана частота анимации бегуна', function () {
            expect(camelGame.runner.runAnimationRate).toBeDefined();
        });

        it('Должны быть заданы ячейки спрайта', function () {
            expect(camelGame.runner.cells).toBeDefined();
        });

        it('Бегун должен бежать направо', function () {
            expect(camelGame.runner.direction).toBe(camelGame.RIGHT);
        });

    });

    describe('Когда запускается игра', function () {
        camelGame.start();

        beforeEach(function () {
            spyOn(camelGame, 'generateLevel(1)');
            spyOn(camelGame, 'createSprites()');
            spyOn(camelGame, 'initializeImages()');
            spyOn(camelGame, 'equipRunner()');
            spyOn(camelGame, 'healthProgressBar.adjustValue()');
            spyOn(camelGame, 'waterProgressBar.adjustValue()');

            camelGame.generateLevel(1);
            camelGame.createSprites();
            camelGame.initializeImages();
            camelGame.equipRunner();
            camelGame.healthProgressBar.adjustValue();
            camelGame.waterProgressBar.adjustValue();
        });

        it('Должен сгенерироваться уровень', function () {
            expect(camelGame.generateLevel(1)).toHaveBeenCalledWith(1);
        });

        it('Должны создаться спрайты', function () {
            expect(camelGame.createSprites()).toHaveBeenCalled();
        });

        it('Должны загрузиться картинки', function () {
            expect(camelGame.initializeImages()).toHaveBeenCalled();
        });

        it('Бегун должен быть готов к действиям', function () {
            expect(camelGame.equipRunner()).toHaveBeenCalled();
        });

        it('Выставление здоровья на 100', function () {
            expect(camelGame.healthProgressBar.adjustValue()).toHaveBeenCalled();
        });

        it('Выставление слюны на 100', function () {
            expect(camelGame.waterProgressBar.adjustValue()).toHaveBeenCalled();
        });

    });

});