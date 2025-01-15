export class Movie {
    constructor(
        public title: string,
        public year: number,
        public country: string,
        public slogan: string,
        public genres: string[],
        public duration: string
    ) {}

    getInfo(): string {
        return `Фильм - ${this.title} (${this.year})\n` +
                `Год - ${this.year}\n` +
                `Страна - ${this.country}\n` +
                `Слоган - "${this.slogan}"\n` +
                `Жанр - ${this.genres.join(', ')}\n` +
                `Время - ${this.duration}`;
    }
}
