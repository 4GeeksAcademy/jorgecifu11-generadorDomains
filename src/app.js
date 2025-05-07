import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


function domainGenerator() {
  let pronouns = ['the', 'our'];
  let adjetives = ['great', 'big'];
  let nouns = ['jogger', 'racoon'];
  let domains = ['.com', '.es']
  let domainCombinations = []

  for (let pronoun of pronouns){
    for (let adjetive of adjetives){
      for (let noun of nouns){
        for (let domain of domains){
          domainCombinations.push(${pronoun} ${adjetive} ${noun} ${domain})
        }
      }
    }
  }
 return domainCombinations
}
let generateDomains = domainGenerator()
 let domainList = document.querySelector('.domain-generator')
 generateDomains.map((element) => {
   domainList.innerHTML += `
   <li>${element}</li>
   `
  })
