class Animal{
    #nome;
    #reino;
    #filo;
    #classe;
    #ordem;
    #familia;
    #genero;
    #especie;

    constructor(nome, reino, filo, classe, ordem, familia, genero, especie) {
        this.#nome = nome;
        this.#reino = reino;
        this.#filo = filo;
        this.#classe = classe;
        this.#ordem = ordem;
        this.#familia = familia;
        this.#genero = genero;
        this.#especie = especie;
    }

    get nome() {
        return this.#nome;
    }

    get reino() {
        return this.#reino;
    }

    get filo() {
        return this.#filo;
    }

    get classe() {
        return this.#classe;
    }

    get ordem() {
        return this.#ordem;
    }

    get familia() {
        return this.#familia;
    }

    get genero() {
        return this.#genero;
    }

    get especie() {
        return this.#especie;
    }
}