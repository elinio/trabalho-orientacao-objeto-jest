export class Matematica {

    somatorio(conjunto: number[]): number {
        const total = conjunto.reduce((total, numero) => total + numero)
        return total
    }

    produto(conjunto: number[]): number {
        const total = conjunto.reduce((total, numero) => total * numero)
        return total
    }

    deltaBhaskara(a: number, b: number, c: number): number {
        const delta = (b * b) - 4 * (a * c)
        return delta
    }

    fatorial(n: number): number {
        const fact = (num: number) => num ? num * fact(num - 1) : 1
        return fact(n)
    }


    ehPrimo(n: number): boolean {
        let divisores = 0;

        for (var count = 1; count <= n; count++)
            if (n % count == 0)
                divisores++;

        if (divisores == 2)
            return true
        else
            return false
    }
}