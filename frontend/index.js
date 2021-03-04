fetch('http://localhost:3000/birds')
  .then(response => response.json())
  .then(birds => {
    birds.forEach(bird => {
      const h2 = document.createElement('h2')
      const h3 = document.createElement('h3')
      const p = document.createElement('p')

      h2.innerHTML = bird.name
      h3.innerHTML = bird.species
      p.innerHTML = bird.tree.name

      document.body.append(h2, h3, p)
    })
  })