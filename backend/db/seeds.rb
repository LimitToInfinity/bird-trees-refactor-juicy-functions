Bird.destroy_all
Tree.destroy_all

oak = Tree.create(name: 'Oak')
maple = Tree.create(name: 'Maple')

Bird.create([
  {name: 'Blueberry', species: 'Blue Bird', tree: oak},
  {name: 'Tuki', species: 'Lorikeet', tree: maple},
  {name: 'Big Bird', species: 'Sesame Street', tree: maple}
])