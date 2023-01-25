import { Personagem } from "./modules/personagem.js"
import { PersonagemView } from "./components/personagem-view.js"
import { Mago } from "./modules/magos.js"
import { Arqueiro } from "./modules/arqueiro.js"
import { ArqueiroMago } from "./modules/arqueiro-mago.js"

const magaMaria = new Mago('Maria', 5, 'gelo', 7, 10)
const arqueiroJose = new Arqueiro('Jose', 6, 7)
const arqueiroMagoChico = new ArqueiroMago('Chico', 7, 10, 'ar', 4, 8)

const personagens = [magaMaria, arqueiroJose, arqueiroMagoChico]

new PersonagemView(personagens).render()