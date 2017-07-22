import AV from 'leancloud-storage/dist/av'

export const initLeanCloud = () => {
  
  const appId = '99FzGNw5b3iITV0z6CfkR7Ku-gzGzoHsz'
  const appKey = 'DyIWV6rUyG3V6WwHT28DwvD1'
  AV.init({ appId, appKey })
}

export const fetchTodos = (filter) => {
  const query = new AV.Query('Todos')
  switch (filter) {
    case 'all':
      return query.ascending('due')
        .equalTo('owner', AV.User.current())
        .find()
    case 'active':
      return query.ascending('due')
        .equalTo('completed', false)
        .equalTo('owner', AV.User.current())
        .find()
    case 'completed':
      return query.ascending('due')
        .equalTo('completed', true)
        .equalTo('owner', AV.User.current())
        .find()
    default:
      throw new Error(`Unknown Filter: ${filter}`)
  }
}

export const addTodo = (text, due) => {
  if (!AV.User.current()) {
    throw new Error('You have to login')
  }
  const Todos = AV.Object.extend('Todos')
  const todo = new Todos()
  todo.set('text', text)
  todo.set('completed', false)
  todo.set('due', due)
  todo.set('owner', AV.User.current())
  return todo.save()
}

export const editTodo = (id, text) => {
  const query = new AV.Query('Todos')
  return query.get(id).then(function (oldTodo) {
    const updatedTodo = AV.Object.createWithoutData('Todos', id)
    updatedTodo.set({
      completed: oldTodo.attributes.completed,
      text,
      due: oldTodo.attributes.due
    })
    return updatedTodo.save()
  }, function (error) {
    throw new Error(error)
  })
}

export const toogleTodo = (id) => {
  const query = new AV.Query('Todos')
  return query.get(id).then(function (oldTodo) {
    
    const updatedTodo = AV.Object.createWithoutData('Todos', id)
    updatedTodo.set({
      completed: !oldTodo.attributes.completed,
      text: oldTodo.attributes.text,
      due: oldTodo.attributes.due
    })
    return updatedTodo.save()
  }, function (error) {})
}

export const deleteTodo = (id) => {
  return AV.Query.doCloudQuery(`delete from Todos where objectId="${id}"`)
    .then(function (res) {
      return res
    }, function (error) {
      throw new Error(error)
    })
}

export const sign= (username, password,email) => {
  const newUser = new AV.User()
  newUser.setUsername(username)
  newUser.setPassword(password)
  newUser.setEmail(email)
  return newUser.signUp()
}

export const login = (username, password) => {
  return AV.User.logIn(username, password)
}

export const getCurrentUser = () => AV.User.current()

export const logOut = () => AV.User.logOut()
