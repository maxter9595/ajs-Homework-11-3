import { Movie } from '../Movie';

describe('Movie', () => {
    let movie: Movie;
    beforeEach(() => {
        movie = new Movie(
            'Мстители (The Avengers)',
            2012,
            'США',
            'Avengers Assemble!',
            [
                'фантастика', 
                'боевик', 
                'фэнтези', 
                'приключения'
            ],
            '137 мин. / 02:17'
        );
    });

    test('should correctly return movie information', () => {
        const expectedInfo = `Фильм - Мстители (The Avengers) (2012)\n` +
                            `Год - 2012\n` +
                            `Страна - США\n` +
                            `Слоган - "Avengers Assemble!"\n` +
                            `Жанр - фантастика, боевик, фэнтези, приключения\n` +
                            `Время - 137 мин. / 02:17`;

        expect(movie.getInfo()).toBe(expectedInfo);
    });

    test('should be added to the cart', () => {
        const cart: Movie[] = [];
        cart.push(movie);
        expect(cart.length).toBe(1);
        expect(cart[0]).toEqual(movie);
        });
});
