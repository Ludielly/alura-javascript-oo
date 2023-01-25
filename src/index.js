import { Personagem } from "./modules/personagem.js"
import { PersonagemView } from "./components/personagem-view.js"
import { Mago } from "./modules/magos.js"

const magoJoao = new Mago('Joao', 7, 'fogo', 8, 6)
const magaMaria = new Mago('Maria', 5, 'gelo', 7, 10)

const personagens = [magoJoao, magaMaria]

new PersonagemView(personagens).render()